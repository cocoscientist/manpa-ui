import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PeopleCard = (props) => {
    return (
        <Card>
            <CardMedia
                sx={{ height: '50%' }}
                image="assets/hero.jpg"
                title="person image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                Full Name
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:"center" }}>
                Card Description
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PeopleCard