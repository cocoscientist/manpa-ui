import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { CardActionArea, Modal } from '@mui/material';

const PeopleCard = (props) => {
    return (
        <Card sx={{boxShadow: "none", backgroundColor: '#F4F6F7'}}>
            <CardActionArea onClick={props.clickFunc}>
            <Skeleton 
                    sx={{
                        height:'150px',
                        width:'50%',
                        borderRadius: '18%',
                        marginLeft:'25%',
                        marginTop:'3%'
                    }}  
                    variant="rectangular" 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                Full Name
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:"center" }}>
                Card Description
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PeopleCard