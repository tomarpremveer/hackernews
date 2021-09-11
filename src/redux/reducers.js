import produce from "immer";
import {MAX_ITEM_ID_FETCHED, ITEM_UPVOTED, NEWS_FETCHED } from "./actions"
const INITIAL_STATE = {
    maxId:0,
    news:[]
}

const newsReducer = (state=INITIAL_STATE,action) => {
   return produce(state, draftState => {
        switch(action.type) {
            case MAX_ITEM_ID_FETCHED:
               draftState.maxId = action.payload
            case ITEM_UPVOTED:
                break;
            case NEWS_FETCHED:
                console.log("the news are",...action.payload)
                draftState.news.push(...action.payload)
        }
    })

}


export default newsReducer;