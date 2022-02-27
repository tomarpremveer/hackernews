import React from "react";
import { useDispatch } from "react-redux";
import { itemUpvoted } from "../redux/actions";


function Vote ({ newsId}) {
    const dispatch = useDispatch();
    return (
        <div>
        <button onClick={() => dispatch(itemUpvoted(newsId))}>Upvote</button>
        </div>
    ) 
}
/*
This mapDispatchToProps and connect function can be seperated into a different component for better seperation of concerns
*/
// const mapDispatchToProps = (dispatch) => {
//     return {
//         voteHandler : (newsId) => dispatch(itemUpvoted(newsId))
//     }
// }
//export default connect(null,mapDispatchToProps)(Vote);
export default React.memo(Vote);