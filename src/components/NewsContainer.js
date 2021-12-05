import React, { useEffect,lazy, Suspense } from "react"
import { maxItemIdFetched, itemsFetched, localItemFetched } from "../redux/actions";
import { useDispatch, useSelector,connect } from "react-redux"
import Header from "./Header"
import News from "./News";
import "../assests/css/index.css";

const LazyLoadedFooter = lazy(() => import('./Footer'));
const LazyLoadedNews = lazy(() => import('./News'));

const newsSelector = (state) => state.news.news


const NewsContainer = function ({news}) {
    const dispatch = useDispatch();
    const maxId = useSelector(state => state.news.maxId)

    useEffect(() =>{
        dispatch(localItemFetched())
        dispatch(maxItemIdFetched())
        if(maxId != 0 ) dispatch(itemsFetched(maxId)) 
    },[maxId])
    return (
        <div className="container">
            <div>
                <Header/>
            </div>
            {
                news.length > 0 ? 
                <div id="news">
                    <Suspense fallback="loading...">
                        <LazyLoadedNews news={news}/>
                    </Suspense>
                </div> :
                <p>Loading...(It takes time on first load)</p>
            }
            <div>
                <Suspense fallback="loading...">
                    <LazyLoadedFooter />
                </Suspense>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        news : Object.values(newsSelector(state)),
      //  isLoading : isLoadingSelector(state)
    }
}

export default connect(mapStateToProps)(NewsContainer);
