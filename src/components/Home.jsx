import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { articlesList } from '../utils/articles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../css/fonts.css'
import Carousel from './Carousel';

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

    return (
        <Box>
            <Box sx={{
                width: '100%',
                position: 'relative',
                bgcolor: '#F4F6F7',
                minHeight: '90vh',
                overflow: 'hidden',
            }}>
                
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
                                src="assets/manpa_hero_visual.png"
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
                                Welcome to Ma & Pa, a co-owned space built to support and uplift <em>every parent</em>, just like you.
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
                                background: '#F4F6F7',
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
                                What is Ma & Pa?
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
                            Hello whoever it is that made it here. If you are here, you are most likely going through a tough time in your life as a parent. 
It is probably one of the following scenarios that has you looking for help or guidance or just someone to speak to without being judged.
a)	You are in the middle of a separation / divorce or have gone through that and are wondering how you will manage your kids and your own life now
b)	You have lost your spouse and now have to worry about your own life and bring up your kids without your spouse
It could also be that someone close to you is going through this phase and you might be trying to understand and help.
Unfortunately or fortunately, I have personally experienced the above directly or seen it with someone close to me. 
I came to realise is that it is a situation that has to be managed at multiple levels and we need help. The situation also changes based on whether one is the father or the mother dealing with this situation.
While families are there to help, sometimes it needs a bit more and often we need to speak to people who will not judge us for our situation or choices we have made.
                            </Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="body2" color="text.secondary" textAlign="left">
I have also had the privilege and honor to have worked with some of the most accomplished professionals over my nearly 3 decades long professional career. All of these folks have carried a desire to contribute more to our society and we hope that together we can help solve some of the problems that single parents face.
My third realization is that our younger generation just needs a good idea to galvanize into action. I have been toying with this idea for some time now, but it was my sons’ and their group of friends who brough this to life. They have found time from their college education and early careers to help with me this and for that I will be eternally grateful.
Out of these three insights is where the idea of MA & PA came to life. MA & PA is a forum, platform, safe space (call it what you want really) for single parents to reach out and get help and for a trusted group of coaches / mentors to come together and help solve some of these problems.
This will be a co-owned space for both parents and coaches / mentors and we can together shape it the way we want to. We will not monetise the data here in any form and the entire funding for this forum will be based on voluntary contributions of time and funds. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                width: '100%',
                position: 'relative',
                bgcolor: '#F4F6F7',
                overflow: 'hidden',
                pb: 10,
                px: 7
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
                        fill="#183A75" />
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
                <Carousel articlesList={articlesList} />
            </Box>
        </Box>
    )
}

export default HomePage