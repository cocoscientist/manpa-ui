import { Skeleton, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleHeading = (props) => {
    const navigate = useNavigate()

    return (
        <div style={{
            position: 'relative', 
            textAlign: 'center',
            height: '50vh'  // 40% of viewport height
        }}>
            <Skeleton 
                width={'100%'} 
                height={'100%'}  // Will fill parent height
                variant="rectangular"
            />
            <Typography 
                variant="button" 
                onClick={() => navigate('/blogs')} 
                sx={{
                    position: 'absolute',
                    top: '4%',
                    left: '2%',
                    cursor: 'pointer'
                }}
            >
                &lt; <u>Back</u>
            </Typography>
            <Typography 
                variant="h3" 
                sx={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '6%',
                    color: '#121212'
                }}
            >
                {props.title}
            </Typography>
            <Typography 
                variant="h5" 
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '6%',
                    color: '#121212'
                }}
            >
                {props.credentials}
            </Typography>
        </div>
    )
}

export default ArticleHeading