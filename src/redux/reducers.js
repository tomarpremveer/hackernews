import produce from "immer";
import {MAX_ITEM_ID_FETCHED, ITEM_UPVOTED, NEWS_FETCHED, LOCAL_ITEMS_FETCHED } from "./actions"
const INITIAL_STATE = {
    maxId:0,
    news:[]
}

const newsReducer = (state=INITIAL_STATE,action) => {
   return produce(state, draftState => {
        switch(action.type) {
            case MAX_ITEM_ID_FETCHED:
               draftState.maxId = action.payload
               break;
            case ITEM_UPVOTED:
                const newsItem = draftState.news.find(item => item.id == action.payload)
                newsItem.score +=1;
                break;
            case NEWS_FETCHED:
                console.log('or here')
                draftState.news.push(...action.payload)
                break;
            case LOCAL_ITEMS_FETCHED:
                console.log('is it comming herer')
                draftState.news.push(...action.payload)
                break;
        }
    })

}


export default newsReducer;