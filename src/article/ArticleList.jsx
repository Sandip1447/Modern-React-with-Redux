import ArticleShow from "./ArticleShow";

function ArticleList({articles}) {
    // Make sure you add key Top of the element
    // when you map an array
    const singleArticle = articles.map((article) => {
        return (
            <div key={article.id}>
                <ArticleShow article={article}/>
            </div>
        )
    });
    return (<div>{singleArticle}</div>);

}

export default ArticleList;