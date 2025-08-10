import { useLocation } from "react-router-dom"
import ArticleHeading from "./articles/ArticleHeading"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import "../css/ArticleViewer.css"

const ArticleViewer = () => {
    const location = useLocation()
    const articleData = location.state
    const [articleText, setArticleText] = useState("")

    useEffect(()=>{
        console.log(articleData)
        window.scrollTo(0, 0)
        import(`../utils/articles/${articleData.id}.md`)
        .then(curFile=>{
            fetch(curFile.default)
            .then(res=>res.text())
            .then(txt=>setArticleText(txt))
        })
    },[])

    return (
        <div className="article-viewer-container">
            <ArticleHeading title={articleData.title} credentials={articleData.credentials} image={articleData.image} light={articleData.light||articleData.lightImage} author={articleData.author}/>
            <div className="article-content">
                {articleText!==""
                    ? <ReactMarkdown>{articleText}</ReactMarkdown>
                    : <div>Loading Article</div>
                }
            </div>
        </div>
    )
}

export default ArticleViewer