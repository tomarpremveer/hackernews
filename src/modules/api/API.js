export async function newsApi(){
    var [fetchedItems,topItems] = [[],[]];   
    var  index =0;
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    await response
        .json()
        .then(items =>{
            topItems.push(...items)
        } );
    while((index < topItems.length) && index < 100){
        const item = await fetch(`https://hacker-news.firebaseio.com/v0/item/${topItems[index]}.json`)
        await item
        .json()
        //.then(resp => validateResponse(resp))
        /*Check whether the response received is okay or not. */
        .then(item =>{
            /*
            TODO check whether the item is a post or comment if is a post then push it into the fetchedArray
            */
           if(item && item.type == "story"){
                fetchedItems.push(item)
           }
        })
        .catch(error => console.log('error occured',error))
        index = index+1;
    }
    return fetchedItems;
}

function validateResponse(response){
    if(!response.ok){
        /*
        Dispatch the error action here, letting the redux store that an error occured during the fetch
        */
       return null;
    }
    return response;
}