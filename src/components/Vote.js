import React from "react";
import { connect } from "react-redux";
import { itemUpvoted } from "../redux/actions";


function Vote ({ newsId,voteHandler }) {
    return (
        <div>
        <button onClick={() => voteHandler(newsId)}>Upvote</button>
        </div>
    ) 
}
/*
This mapDispatchToProps and connect function can be seperated into a different component for better seperation of concerns
*/
const mapDispatchToProps = (dispatch) => {
    return {
        voteHandler : (newsId) => dispatch(itemUpvoted(newsId))
    }
}
export default connect(null,mapDispatchToProps)(Vote);