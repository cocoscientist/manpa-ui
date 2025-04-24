import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { articlesList } from '../utils/articles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios'
import '../css/fonts.css'

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loggedUser, setLoggedUser] = useState(null);
    const [rotated, setRotated] = useState(false);
    const dayZeroRef = useRef(null);

    const handleClick = () => {
        setRotated(prev => !prev);
    };

    const scrollToSection = () => {
        dayZeroRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <Box>
            <Box sx={{
                width: '100%',
                position: 'relative',
                bgcolor: '#FFD8B9',
                minHeight: '90vh',
                overflow: 'hidden',
            }}>
                <Box
                    component="svg"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'auto',
                        maxHeight: { xs: '300px', sm: '350px', md: '480px' }
                    }}
                    viewBox="0 64 1440 480"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0H1440V299.5C1440 299.5 1279.26 369.738 1169.5 382C1003.92 400.497 914.743 293.074 749 310C577.731 327.49 510.503 450.676 340 474.5C208.344 492.896 0 458 0 458V0Z"
                        fill="#B34B28" />
                </Box>
                <Container maxWidth="lg" sx={{ pt: 15, pb: 2, position: 'relative', zIndex: 1 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Box
                            sx={{
                                width: { xs: '100%', md: '100%' },
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'relative',
                                right: { md: '-5%' },
                                mb: { xs: 4, md: 0 },
                            }}
                        >
                            <img
                                src="assets/hero.jpg"
                                alt="Manpa community"
                                style={{
                                    width: '100%',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '4px'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', md: '70%' },
                            textAlign: { xs: 'right', md: 'right' },
                            zIndex: 2,
                            position: 'relative',
                            left: { md: '-15%' },
                            top: { md: '20px' },
                        }}>
                            <Typography
                                component="h1"
                                sx={{
                                    fontFamily: 'Avenir, sans-serif',
                                    mb: 2,
                                    fontWeight: 400,
                                    fontSize: '22px',
                                    lineHeight: '100%',
                                    letterSpacing: '0px',
                                }}
                            >
                                Welcome to manpa, a co-owned space built to support and uplift <em>every parent</em>, just like you.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
                <Box sx={{ mt: 2, mb: 6, textAlign: 'center', position: 'relative' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 2,
                        }}
                    >
                        <Typography
                            component="span"
                            onClick={scrollToSection}
                            sx={{
                                fontWeight: 500,
                                fontSize: '18px',
                                mb: 3,
                                color: '#000',
                                cursor: 'pointer',
                            }}
                        >
                            see
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            width: '100%',
                            position: 'relative',
                            height: '40px',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                borderBottom: '2px dashed #000',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                                borderBottomStyle: 'dashed',
                                borderImage: 'repeating-linear-gradient(to right, #000 0, #000 10px, transparent 10px, transparent 20px) 1',
                            }}
                        />

                        <Box
                            onClick={scrollToSection} // Apply onClick only to the arrow
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: '1px solid #000',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#FFD8B9',
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(-50%)',
                                zIndex: 2,
                                cursor: 'pointer',
                            }}
                        >
                            <Box
                                component="svg"
                                sx={{
                                    width: 24,
                                    height: 24,
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
                    </Box>
                </Box>
                <Container maxWidth="lg">
                    <Box sx={{ py: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 600,
                                    mr: 8,
                                    color: '#2C1239'
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
                                stroke="#2C1239"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="4 7 12 15 20 7" />
                            </Box>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontStyle: 'italic',
                                color: '#2C1239'
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
                        mb: 10,
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
            </Box>
            <Box sx={{
                width: '100%',
                position: 'relative',
                bgcolor: '#FFD8B9',
                overflow: 'hidden',
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        borderBottom: '2px dashed #000',
                        top: '0.3%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        borderBottomStyle: 'dashed',
                        borderImage: 'repeating-linear-gradient(to right, #000 0, #000 10px, transparent 10px, transparent 20px) 1',
                    }}
                />
                <Box
                    component="svg"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'auto',
                        maxHeight: { xs: '250px', sm: '275px', md: '321px' }
                    }}
                    viewBox="0 0 1440 321"
                    preserveAspectRatio="none"
                >
                    <path d="M1447.5 0.500089L-102.04 0.500189L-102.04 125.761C-102.04 125.761 64.4603 225.756 204.527 225.756C371.133 225.756 467.402 164.882 630.345 199.62C798.721 235.516 786 281.5 1011.5 317C1142.82 337.673 1447.5 246 1447.5 246L1447.5 0.500089Z"
                        fill="#B34B28" />
                </Box>
                <Container maxWidth="lg" ref={dayZeroRef} sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ py: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 4 }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                fontStyle="italic"
                                sx={{
                                    fontWeight: 700,
                                    mr: 8,
                                    color: '#FBF5F5',
                                    fontFamily: 'Inter',
                                }}
                            >
                                Day 0 of single parenting
                            </Typography>
                        </Box>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#FBF5F5',
                                fontFamily: 'Avenir-Light, sans-serif',
                                fontWeight: 300,
                            }}
                        >
                            The ABCs to get you started.
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="lg" sx={{ position: 'relative', mt: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            scrollSnapType: 'x mandatory',
                            gap: 2,
                            py: 2,
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
                                border: 'none',
                                backgroundColor: 'transparent'
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
                                        borderRadius: '12px',
                                        objectFit: 'cover',
                                        scrollSnapAlign: 'start'
                                    }}
                                />
                                <CardContent sx={{ px: 0.5 }}>
                                    <Typography variant="h6" sx={{
                                        color: '#2C1239',
                                        fontWeight: 700,
                                        fontFamily: 'Inter',
                                        fontSize: '24px',
                                    }}>
                                        {article.title}
                                    </Typography>
                                    <Typography variant="subtitle2" fontStyle="italic" mt={0.5} mb={1} sx={{
                                        color: '#2C1239',
                                        fontFamily: 'Avenir, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '15px',
                                    }}>
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
        </Box>
    )
}

export default HomePage