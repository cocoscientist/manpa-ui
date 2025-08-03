import { Card, CardMedia, Skeleton, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleHeading = (props) => {
    const navigate = useNavigate()

    return (
        <div style={{
            position: 'relative', 
            textAlign: 'center',
            height: '55vh',  // 40% of viewport height
            background: '#183A75',
        }}>
            <img
                src={`../${props.image}`}
                alt={props.title}
                width={'100%'} 
                height={'100%'}  // Will fill parent height
            />
            <Typography 
                variant="button" 
                onClick={() => navigate('/blogs')} 
                sx={{
                    position: 'absolute',
                    top: '4%',
                    left: '2%',
                    cursor: 'pointer',
                    color: '#121212'
                }}
            >
                &lt; <u>Back</u>
            </Typography>
            <Typography 
                variant="h3" 
                sx={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '66%',
                    color: (props.light?'#121212':'#f5f5f5')
                }}
            >
                {props.title}
            </Typography>
            <Typography 
                variant="h5" 
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '66%',
                    color: (props.light?'#121212':'#f5f5f5')
                }}
            >
                {props.credentials}
            </Typography>
        </div>
    )
}

export default ArticleHeading