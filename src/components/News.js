import React from "react";
import { connect } from "react-redux";
import Vote from "./Vote";

const News = function ({newsArray}) {
    return (
        <>
        <div>
        { newsArray.length > 0 ?
            newsArray.map((news) => (
                <React.Fragment key={news.id}>
                    <div className="newsExcerpt"> 
                        <div className="title"> <p> {news.title} </p></div>
                        <div>
                            <div className="user"> 
                            <p>{`By ${news.by} and Votes are: ${news.score}`}</p>
                             </div>
                            <div className="vote"><Vote newsId={news.id}/></div>
                        </div>
                    </div>
                </React.Fragment>
            )) : <p>No items was found</p>
        }
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newsArray : state.news.news
    }
}

export default connect(mapStateToProps)(News);