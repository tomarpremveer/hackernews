import React,{ useMemo, useState } from "react";
import NewsExcerpt from "./NewsExcerpt";
import Paginator from "./Paginator";


//const isLoadingSelector = (state) => state.news.isLoading

const calculateNews = (news,pageNumber,limit=10) =>{
    const startingOffset= (pageNumber -1) * limit
    const endOffset = startingOffset + limit
    const newsToRender = news.slice(startingOffset,endOffset)
    return newsToRender
}

const News = function ({news}) {
    const [pageNumber,setPageNumber] = useState(1);
    const newsToRender = calculateNews(news,pageNumber)
    return (
        <>
        <div>
        { 
            newsToRender.length > 0 ?
                newsToRender.map((news) => (
                    
                    <NewsExcerpt key={news.id} news={news} />  
                )) : <p>No items was found</p> 
        }
        </div>
        <div className="footer">
            <Paginator 
                newsCount={news.length} 
                pageClickHandler={setPageNumber}
            />
        </div>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         isLoading : isLoadingSelector(state)
//     }
// }

//export default connect(mapStateToProps)(News);
export default News;