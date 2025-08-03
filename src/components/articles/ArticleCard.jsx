import { Card, CardActionArea, CardMedia, Skeleton, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleCard = (props) => {
    const navigate = useNavigate()

    return (
        <Card square={true} sx={{
            width: '80%', 
            marginLeft: '3%', 
            borderBottom: 2, 
            boxShadow: "none", 
            borderColor: '#ababab',
            backgroundColor: '#F4F6F7',
        }}>
            <CardActionArea 
                sx={{ 
                    display: 'flex', // Set a fixed height for CardActionArea
                    position: 'relative', // For child absolute positioning
                    justifyContent: 'flex-start'
                }} 
                onClick={() => {
                    navigate(`/blog/${props.title}`, {state: props})
                }}
            >
                <CardContent sx={{ width: '75%', left: '2%' }}>
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
                <CardMedia
                    component="img"
                    image={props.image}
                    alt={props.title} 
                    sx={{
                        width: '20%',
                        height: '80%', // 80% of parent height
                        position: 'absolute',
                        right: '2%',
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }}
                    variant="rectangular" 
                />
            </CardActionArea>
        </Card>
    )
}

export default ArticleCard