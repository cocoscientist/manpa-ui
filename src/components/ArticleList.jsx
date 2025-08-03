import { useEffect, useState } from 'react'
import * as articleutils from '../utils/articlesutils'
import ArticleCard from './articles/ArticleCard'
import { Stack, Pagination } from '@mui/material'
import '../css/articleList.css'

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
        <div className="article-list-container">
            <div className="articles-wrapper">
                {articlesList.length !== 0 
                    ? articlesList.map(a => (
                        <ArticleCard 
                            title={a.title} 
                            intro={a.intro} 
                            author={a.author} 
                            image={a.image}
                            id={a.id}
                            credentials={a.credentials}
                            light={a.lightImage?true:false}
                        />
                    ))
                    : <div>No articles found</div>
                }
            </div>
            <div className="pagination-wrapper">
                <Stack spacing={2}>
                    <Pagination 
                        count={totalPages} 
                        page={page} 
                        onChange={(e,v) => setCurrentPage(v)} 
                        sx={{
                            color: '#343434', // Set text color to purple for all items
                            "& .MuiPaginationItem-root": {
                                color: '#343434' // Set text color to purple for all items
                            },
                            "& .MuiPaginationItem-root.Mui-selected": {
                                color: '#343434' // Set text color to purple for selected item
                            }
                        }}
                    />
                </Stack>
            </div>
        </div>
    )
}

export default ArticleList