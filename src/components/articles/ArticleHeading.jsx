import { Skeleton, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleHeading = (props) => {
    const navigate = useNavigate()

    return (
        <div style={{position:'relative',textAlign:'center'}}>
            <Skeleton width={'100%'}/>
            <Typography variant="button" onClick={()=>{navigate('/blogs')}} sx={{top:'8px',right:'16px'}}>Back</Typography>
            <Typography variant="h5" sx={{bottom:'8px',right:'16px'}}>{props.title}</Typography>
        </div>
    )
}

export default ArticleHeading