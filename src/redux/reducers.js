import produce from "immer";
import {MAX_ITEM_ID_FETCHED, ITEM_UPVOTED, NEWS_FETCHED, LOCAL_ITEMS_FETCHED } from "./actions"

/*
Normalizing the store strcuture to make sure only one copy of each piece is present,
elements can be found using the Id directly.

news:{
    Id: element{id:Id,name:xyz}
    1:{},
    2:{}
}
*/
const INITIAL_STATE = {
    maxId:0,
    news:{},
    isLoading:true
}

const newsReducer = (state = INITIAL_STATE, action) => {
   return produce(state, draftState => {
        switch(action.type) {
            case MAX_ITEM_ID_FETCHED:
               draftState.maxId = action.payload
               break;
            case ITEM_UPVOTED:
                const newsItem = draftState.news[action.payload]
                newsItem.score +=1;
                break;
            case NEWS_FETCHED:
                for (const item of action.payload){
                    draftState.news[item.id]=item
                }
                draftState.isLoading = false
                break;
            case LOCAL_ITEMS_FETCHED:
                for (const item of action.payload){
                    draftState.news[item.id]=item
                }
                if(action.payload.length > 0){
                    draftState.isLoading = false
                }
                break;
        }
    })

}


export default newsReducer;