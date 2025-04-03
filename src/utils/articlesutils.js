import { articlesList } from "./articles"

export const getTotalPages = () => {
    return Math.ceil(articlesList.length/4)
}

export const getArticlesByPage = (page) => {
    let list = []
    const start = 4*(page-1)
    for(let i=start;i<Math.min(start+4,articlesList.length);i++){
        list.push(articlesList[i])
    }
    return list
}