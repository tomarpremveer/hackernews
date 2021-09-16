import React from "react";
import { connect } from "react-redux";
import NewsExcerpt from "./NewsExcerpt";
import Paginator from "./Paginator";

const News = function ({newsArray}) {
    return (
        <>
        <div>
        { newsArray.length > 0 ?
            newsArray.map((news) => (
              <NewsExcerpt key={news.id} news={news} />  
            )) : <p>No items was found</p>
        }
        </div>
        <div className="footer">
            <Paginator newsCount={newsArray.length} />
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newsArray : Object.values(state.news.news)
    }
}

export default connect(mapStateToProps)(News);