export async function newsApi(maxIds){
    var fetchedItems = [];
    let [newsItemCount, index] =[0,0];
    while(true){
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${maxIds-index}.json`)
        await response
        .json()
        .then(item =>{
            /*
            TODO check whether the item is a post or comment if is a post then push it into the fetchedArray
            */
           if(item.type == "story"){
                newsItemCount +=1;
                fetchedItems.push(item)
           }
        })
        .catch(error => console.log('error occured',error))
        index = index+1;
        if(newsItemCount > 9) break; // only fetching 10 stories initially
    }
    return fetchedItems;
}

export async function maximumItemIdApi(){
    let maxItemId = 0;
    const response = await fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
        await response
        .json()
        .then(maxItemIds => maxItemId = maxItemIds)
        .catch((error) => console.log(error))
    return maxItemId;
}
