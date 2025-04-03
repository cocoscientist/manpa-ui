import { Card, CardActionArea, Skeleton, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleCard = (props) => {
    const navigate = useNavigate()

    return (
        <Card>
            <CardActionArea sx={{ display: 'flex' }} onClick={()=>{navigate(`/blog/${props.title}`,{state:props})}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.intro}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                        Written by {props.author}
                    </Typography>
                </CardContent>
                <Skeleton sx={{width:'280px'}} animation="wave" variant="rectangular" />
            </CardActionArea>
        </Card>
    )
}

export default ArticleCard