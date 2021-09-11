export const ITEM_UPVOTED = 'ITEM_UPVOTED'
export const MAX_ITEM_ID_FETCHED = 'MAX_ITEM_ID_FETCHED'
export const NEWS_FETCHED ='NEWS_FETCHED'

export const itemUpvoted = () => ({ type:ITEM_UPVOTED })

export const maxItemIdFetched = () => async(dispatch,getState) => {
console.log("did we came here")
    //TODO add response validation logic here or create a seperate method to do that
    const state = getState();
    const {maxId} = state.news
    
    if(maxId == 0 ){
        const response = await fetch('https://hacker-news.firebaseio.com/v0/maxitem.json')
        await response
        .json()
        .then(maxItemIds => {
                dispatch({ type:MAX_ITEM_ID_FETCHED,payload: maxItemIds })
            })
        .catch((error) => console.log(error))
    }
    
}

/*TODO Slowest thunk.
Reason : the way hackernews api provides data.
*/
export const itemsFetched = (maxIds) =>async (dispatch,getState) => {
    var fetchedItems = [];
    for (let index=0; index < 10; index++){
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${maxIds-index}.json`)
        await response
        .json()
        .then(item =>{
            fetchedItems.push(item)
        })
        .catch(error => console.log('error occured',error))
    }
    if(fetchedItems.length >= 1){
        dispatch({type: NEWS_FETCHED,payload: fetchedItems})
    }
}