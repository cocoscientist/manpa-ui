import { useEffect, useState } from 'react'
import * as articleutils from '../utils/articlesutils'
import ArticleCard from './articles/ArticleCard'
import { Stack, Pagination } from '@mui/material'

const ArticleList = () => {
    const [page, setCurrentPage] = useState(1)
    const [articlesList, setArticlesList] = useState([])
    
    const [totalPages, setTotalPages] = useState(10)

    useEffect(()=>{
        setTotalPages(articleutils.getTotalPages())
    },[])

    useEffect(()=>{
        console.log("Page Changed")
        console.log(articlesList)
        console.log(totalPages)
        console.log(articleutils.getArticlesByPage(page))
        setArticlesList(articleutils.getArticlesByPage(page))
    },[page])

    return (
        <>
            {articlesList.length!=0?
            articlesList.map(a=><ArticleCard title={a.title} intro={a.intro} author={a.author}/>)
            :<div>No articles found</div>}
            <Stack spacing={2} sx={{margin:'20px'}}>
                <Pagination count={totalPages} page={page} onChange={(e,v)=>setCurrentPage(v)} />
            </Stack>
        </>
    )
}

export default ArticleList