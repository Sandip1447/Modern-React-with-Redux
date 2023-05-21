import React, {useState} from "react";
import SearchArticles from "./SearchArticles";
import SearchBar from "./SearchBar";
import ArticleList from "./ArticleList";

/**
 * Using an API with React
 * */

function Article() {

    const [articles, setArticles] = useState([]);
    const handleSubmit = async (term) => {
        const result = await SearchArticles(term)
        setArticles(result)
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default Article;