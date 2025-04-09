import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { articlesList } from '../utils/articles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios'

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loggedUser, setLoggedUser] = useState(null);
    const [rotated, setRotated] = useState(false);

    const handleClick = () => {
        setRotated(prev => !prev);
    };

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token !== undefined && token !== null) {
            console.log("Token found")
            console.log(token)
            axios.get('https://www.manpa.co.in/authenticated-route', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    setLoggedUser(res.data.message)
                })
        }
        else {
            console.log("Token not found");
            setLoggedUser(null);
        }
    }, [navigate, location.key])

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth="lg" sx={{ pt: 32, pb: 8 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 6,
                }}>
                    <Box
                        sx={{
                            width: { xs: '100%', md: '45%' },
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="assets/hero.jpg"
                            alt="Manpa community"
                            style={{
                                width: '130%',
                                maxWidth: '130%',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '4px'
                            }}
                        />
                    </Box>
                    <Box sx={{
                        width: { xs: '100%', md: '50%' },
                        textAlign: { xs: 'center', md: 'center' }
                    }}>
                        <Typography
                            variant="h5"
                            component="h1"
                            sx={{
                                mb: 2,
                                fontWeight: 500,
                                lineHeight: 1.4,
                            }}
                        >
                            Welcome to manpa, a co-owned space built to support and uplift <em>every parent</em>, just like you.
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ py: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 600,
                                mr: 8
                            }}
                        >
                            What is Manpa?
                        </Typography>
                        <Box
                            onClick={handleClick}
                            component="svg"
                            sx={{
                                width: 48,
                                height: 48,
                                cursor: 'pointer',
                                transition: 'transform 0.4s ease',
                                transform: rotated ? 'rotate(-180deg)' : 'rotate(0deg)'
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9" />
                        </Box>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontStyle: 'italic',
                            color: '#555'
                        }}
                    >
                        Mission, vision, and our story.
                    </Typography>
                </Box>
            </Container>
            <Container
                sx={{
                    maxHeight: rotated ? '1000px' : '0px',
                    opacity: rotated ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease, opacity 0.5s ease 0.2s',
                    mb: 4
                }}
            >
                <Grid container spacing={4} justifyContent="center">
                    <Grid size={6}>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus dui, blandit nec elit a,
                            rhoncus ullamcorper turpis. Sed eget sollicitudin nisl. Vestibulum vestibulum justo ac convallis
                            consequat. Donec porttitor neque nec nunc consectetur, nec auctor quam imperdiet. Mauris malesuada
                            dapibus justo sed ultricies. Cras in posuere erat, non feugiat orci. Maecenas lacinia arcu sit amet
                            nisl luctus, et sollicitudin enim vehicula. Sed tincidunt nibh at ipsum ornare dignissim.
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus dui, blandit nec elit a,
                            rhoncus ullamcorper turpis. Sed eget sollicitudin nisl. Vestibulum vestibulum justo ac convallis
                            consequat. Donec porttitor neque nec nunc consectetur, nec auctor quam imperdiet. Mauris malesuada
                            dapibus justo sed ultricies. Cras in posuere erat, non feugiat orci. Maecenas lacinia arcu sit amet
                            nisl luctus, et sollicitudin enim vehicula. Sed tincidunt nibh at ipsum ornare dignissim.
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus dui, blandit nec elit a,
                            rhoncus ullamcorper turpis. Sed eget sollicitudin nisl. Vestibulum vestibulum justo ac convallis
                            consequat. Donec porttitor neque nec nunc consectetur, nec auctor quam imperdiet. Mauris malesuada
                            dapibus justo sed ultricies. Cras in posuere erat, non feugiat orci. Maecenas lacinia arcu sit amet
                            nisl luctus, et sollicitudin enim vehicula. Sed tincidunt nibh at ipsum ornare dignissim.
                        </Typography>
                    </Grid>
                    <Grid size={6}>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus dui, blandit nec elit a,
                            rhoncus ullamcorper turpis. Sed eget sollicitudin nisl. Vestibulum vestibulum justo ac convallis
                            consequat. Donec porttitor neque nec nunc consectetur, nec auctor quam imperdiet. Mauris malesuada
                            dapibus justo sed ultricies. Cras in posuere erat, non feugiat orci. Maecenas lacinia arcu sit amet
                            nisl luctus, et sollicitudin enim vehicula. Sed tincidunt nibh at ipsum ornare dignissim.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg">
                <Box sx={{ py: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            fontStyle="italic"
                            sx={{
                                fontWeight: 600,
                                mr: 8
                            }}
                        >
                            Day 0 of single parenting
                        </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#555'
                        }}
                    >
                        The ABCs to get you started.
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="lg" sx={{ position: 'relative', mt: 4 }}>
                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        gap: 2,
                        py: 2,
                        px: 1,
                        scrollBehavior: 'smooth',
                    }}
                    ref={scrollRef => { window.scrollRef = scrollRef }}
                >
                    {articlesList.map((article, index) => (
                        <Card sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            minWidth: 280, 
                            scrollSnapAlign: 'start', 
                            boxShadow: 'none', 
                            border: 'none' 
                        }}
                        onClick={() => {
                            navigate(`/blog/${article.title}`, { state: article })
                        }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={article.image}
                                alt={article.title}
                                sx={{
                                    borderRadius: '4px',
                                    objectFit: 'cover',
                                    scrollSnapAlign: 'start'
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    {article.title}
                                </Typography>
                                <Typography variant="subtitle2" fontStyle="italic" mt={0.5} mb={1}>
                                    written by {article.author}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <ArrowBackIosNewIcon
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: -16,
                        zIndex: 10,
                        cursor: 'pointer',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow: 2,
                        p: 0.5
                    }}
                    onClick={() => {
                        if (window.scrollRef) window.scrollRef.scrollBy({ left: -300, behavior: 'smooth' });
                    }}
                />
                <ArrowForwardIosIcon
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: -16,
                        zIndex: 10,
                        cursor: 'pointer',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow: 2,
                        p: 0.5
                    }}
                    onClick={() => {
                        if (window.scrollRef) window.scrollRef.scrollBy({ left: 300, behavior: 'smooth' });
                    }}
                />
            </Container>
        </Box>

    )
}

export default HomePage