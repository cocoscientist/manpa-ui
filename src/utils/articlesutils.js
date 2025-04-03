import * as articlesList from "./articles.json"

const pageSize = 4

const getTotalPages = () => {
    return Math.ceil(articlesList.length/4)
}

const getArticlesByPage = (page) => {
    let list = []
    const start = pageSize*(i-1)
    for(let i=start;i<start+pageSize;i++){
        if(i<articlesList.length){
            list.push(articlesList[i])
        }else{
            break
        }
    }
    return list
}