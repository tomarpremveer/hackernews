import React,{ useState } from "react";
import { connect } from "react-redux";
import NewsExcerpt from "./NewsExcerpt";
import Paginator from "./Paginator";


const newsSelector = (state) => state.news.news
const isLoadingSelector = (state) => state.news.isLoading

const calculateNews = (news,pageNumber,limit=10) =>{
    const startingOffset= (pageNumber -1) * limit
    const endOffset = startingOffset + limit
    const newsToRender = news.slice(startingOffset,endOffset)
    return newsToRender
}

const News = function ({newsArray,isLoading}) {
    const [pageNumber,setPageNumber] = useState(1);
    const newsToRender = calculateNews(newsArray,pageNumber)
    return (
        <>
        <div>
        { 
            isLoading === true ? <p>Loading...(It takes time on first load)</p> : 
            newsToRender.length > 0 ?
                newsToRender.map((news) => (
                    <NewsExcerpt key={news.id} news={news} />  
                )) : <p>No items was found</p> 
        }
        </div>
        <div className="footer">
            <Paginator 
                newsCount={newsArray.length} 
                pageClickHandlerCallback={setPageNumber}
            />
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        newsArray : Object.values(newsSelector(state)),
        isLoading : isLoadingSelector(state)
    }
}

export default connect(mapStateToProps)(News);