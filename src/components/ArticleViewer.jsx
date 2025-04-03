import { useLocation, useParams } from "react-router-dom"
import ArticleHeading from "./articles/ArticleHeading"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

const ArticleViewer = () => {
    const location = useLocation()
    const articleData = location.state
    const [articleText, setArticleText] = useState("")

    useEffect(()=>{
        console.log(location)
        console.log(articleData.id)
        import(`../utils/articles/${articleData.id}.md`)
        .then(curFile=>{
            fetch(curFile.default)
            .then(res=>res.text())
            .then(txt=>setArticleText(txt))
        })
    },[])

    return (
        <>
            <ArticleHeading title={articleData.title}/>
            {articleText!==""?<ReactMarkdown>{articleText}</ReactMarkdown>:<div>Loading Article</div>}
        </>
    )
}

export default ArticleViewer