import { newsApi,maximumItemIdApi } from "../modules/api/API"
import { getNews, saveNews } from "../modules/utils/LocalStorageUtil"

export const ITEM_UPVOTED = 'ITEM_UPVOTED'
export const MAX_ITEM_ID_FETCHED = 'MAX_ITEM_ID_FETCHED'
export const NEWS_FETCHED ='NEWS_FETCHED'
export const LOCAL_ITEMS_FETCHED='LOCAL_ITEMS_FETCHED'

export const itemUpvoted = (newsId) => ({ type:ITEM_UPVOTED,payload: newsId })

export const localItemFetched = () => {
    const news = getNews();
    return {
        type: LOCAL_ITEMS_FETCHED,
        payload: news
    }
}

export const maxItemIdFetched = () => async (dispatch,getState) => {

    //TODO add response validation logic here or create a seperate method to do that
    const state = getState();
    const {maxId} = state.news
    
    if(maxId == 0 ){
        let maxItemId = await maximumItemIdApi();
        dispatch({ type:MAX_ITEM_ID_FETCHED,payload: maxItemId })
    }
    
}

/*TODO Slowest thunk.
Reason : the way hackernews api provides data.
*/
export const itemsFetched = (maxIds) => async (dispatch) => {
    let fetchedItems = await newsApi(maxIds);
    /*
    TODO check here if there are posts in the localstorage them show them while new posts are fetched.
    */
    if(fetchedItems.length >= 1){
        saveNews(fetchedItems) // save to the localStorage
        dispatch({type: NEWS_FETCHED,payload: fetchedItems})
    }
}