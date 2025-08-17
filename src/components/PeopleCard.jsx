import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { CardActionArea, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';

const PeopleCard = (props) => {
    const { name, image, expertise, about, background } = props;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ boxShadow: "none", backgroundColor: '#F4F6F7' }}>
                <CardActionArea onClick={handleOpen}>
                    {props.img ? (
                        <CardMedia
                            component="img"
                            image={props.img}
                            alt={name}
                            sx={{
                                height: '150px',
                                width: '50%',
                                borderRadius: '18%',
                                marginLeft: '25%',
                                marginTop: '3%',
                                objectFit: 'cover'
                            }}
                        />
                    ) : (
                        <Skeleton
                            sx={{
                                height: '150px',
                                width: '50%',
                                borderRadius: '18%',
                                marginLeft: '25%',
                                marginTop: '3%'
                            }}
                            variant="rectangular"
                        />
                    )}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            {props.name || "Full Name"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "center" }}>
                            {props.expertise || "Card Description"}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ textAlign: 'center' }}>{name || "Full Name"}</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        {props.img ? (
                            <img
                                src={props.img}
                                alt={name}
                                style={{
                                    height: '150px',
                                    width: '150px',
                                    borderRadius: '18%',
                                    objectFit: 'cover'
                                }}
                            />
                        ) : (
                            <Skeleton
                                sx={{
                                    height: '150px',
                                    width: '150px',
                                    borderRadius: '18%'
                                }}
                                variant="rectangular"
                            />
                        )}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        Areas of Expertise:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {props.expertise || "N/A"}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        About:
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {props.desc || "N/A"}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        Background:
                    </Typography>
                    <Typography variant="body2">
                        {props.designation || "N/A"}
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default PeopleCard