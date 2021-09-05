import produce from "immer";
import {ITEMS_FETCHED, ITEM_UPVOTED } from "./actions"
const INITIAL_STATE = {
    items:[]
}

const reducer = (state=INITIAL_STATE,action) =>{
    produce(state,draftState => {
        switch(action.type) {
            case ITEMS_FETCHED:
               draftState.items.push(...action.payload)
            case ITEM_UPVOTED:
                break;
        }
    })

}

// const reducer = (state=INITIAL_STATE, action) => {
//     switch(action.type){
//         case ITEMS_FETCHED:
//             console.log('came here')
//             return {...state, items:[...state.items, ...action.payload]}
//         default:
//             return state;
//     }
// }

export default reducer;