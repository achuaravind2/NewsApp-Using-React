import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";


const NewsArea = ({category}) => {
    const [articles, SetArticles] = useState ([]);

    useEffect (() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(response => response.json())
        .then(data => SetArticles(data.articles));
    }, [category]);

    return (
        <div>
         <h2 className= "text-center">
            <span className= "badge bg-danger"style={{ cursor: "pointer" }}>Latest News</span>
         </h2>
         {articles.map((news,index)=>{
            return (
                <NewsItems
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                />
            )
         }
        )}
        </div>
    )
}

export default NewsArea