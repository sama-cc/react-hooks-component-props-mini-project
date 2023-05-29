import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList({ articles = blogData }) {
    const articleList = articles.posts.map(article => {
        
        const min = article.minutes;

        function minRead() {
            if (min < 30) {
                const rMin = Math.floor(min / 5);                
                return rMin
            } else {
                const rMin = Math.ceil(min / 10);                
                return rMin                
            }
        };

        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} rMin={minRead()} minutes={article.minutes} />
    })

    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList