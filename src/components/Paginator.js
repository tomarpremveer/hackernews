import React from "react";

function Paginator({
    newsCount, 
    onPageClickHandler = (pageNumber) => { console.log(pageNumber)}
    }){
        var pages=[];
        const noOfPages = Math.ceil(newsCount/10);

        for (let i=1; i<=noOfPages; i++){
            pages.push(i);
        }
        
        return (
            <div>
                {
                pages.length > 0 ? pages.map(page => (
                    <button
                    key ={page} 
                    className="pagination-element"
                    onClick={() => onPageClickHandler(page)}
                    title={page}
                    >{page}</button>   
                    )) : null
                }
            </div>
        )
}


export default Paginator;