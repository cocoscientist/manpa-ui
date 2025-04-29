import { useState, useEffect, useRef } from 'react'
import { Container, Box, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ articlesList }) => {
    const scrollRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);
    const CARD_WIDTH = 296;
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const updateMaxPage = () => {
            if (scrollRef.current) {
                const totalCards = articlesList.length;
                const cardsPerView = Math.floor(scrollRef.current.clientWidth / CARD_WIDTH);
                const pages = Math.ceil(totalCards / cardsPerView);
                setMaxPage(pages);
                setMaxScrollPosition(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
            }
        };
        updateMaxPage();
        window.addEventListener('resize', updateMaxPage);
        return () => window.removeEventListener('resize', updateMaxPage);
    }, [articlesList.length]);

    const shouldShowLeftArrow = () => {
        return scrollPosition > 0;
    };

    const shouldShowRightArrow = () => {
        return maxScrollPosition > 0 && scrollPosition < maxScrollPosition;
    };

    const scrollToPage = (page) => {
        if (page < 0) {
            page = 0;
        }
        if (page >= maxPage) {
            page = maxPage - 1;
        }
        if (scrollRef.current) {
            isScrollingRef.current = true;
            const cardsPerView = Math.floor(scrollRef.current.clientWidth / CARD_WIDTH);
            const scrollLeft = page * cardsPerView * CARD_WIDTH;
            scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            setCurrentPage(page);
            setScrollPosition(scrollLeft);
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 100);
        }
    };

    const handleScroll = () => {
        if (isScrollingRef.current) return;

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            if (scrollRef.current) {
                const scrollLeft = scrollRef.current.scrollLeft;
                setScrollPosition(scrollLeft);
                const totalScrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                const cardsPerView = Math.floor(scrollRef.current.clientWidth / CARD_WIDTH);
                const totalCards = articlesList.length;
                const maxPage = Math.ceil(totalCards / cardsPerView);

                // If scrolled to the very end, set to the last page
                if (scrollLeft >= totalScrollWidth) {
                    setCurrentPage(maxPage - 1);
                } else {
                    const newPage = Math.round(scrollLeft / (CARD_WIDTH * cardsPerView));
                    setCurrentPage(newPage);
                }
            }
        }, 100); // Debounce delay
    };


    return (
        <Container maxWidth="lg" sx={{ position: 'relative', mt: 1 }}>
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    gap: 2,
                    py: 2,
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {articlesList.map((article, index) => (
                    <Card
                        key={index}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: 280,
                            scrollSnapAlign: 'start',
                            boxShadow: 'none',
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                        onClick={() => {
                            navigate(`/blog/${article.title}`, { state: article });
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={article.image}
                            alt={article.title}
                            sx={{
                                borderRadius: '12px',
                                objectFit: 'cover',
                                scrollSnapAlign: 'start',
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
            {shouldShowLeftArrow() && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '30%',
                        left: 0,
                        transform: 'translate(-100%, -50%)',
                        zIndex: 10,
                        cursor: 'pointer',
                        width: 36,
                        height: 36,
                    }}
                    onClick={() => scrollToPage(currentPage - 1)}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="22.5"
                            cy="22.5"
                            r="22"
                            transform="rotate(-90 22.5 22.5)"
                            stroke="black"
                        />
                        <line
                            x1="25"
                            y1="31.5858"
                            x2="16.4142"
                            y2="23"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="24.5858"
                            y1="14"
                            x2="16"
                            y2="22.5858"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </Box>
            )}
            {shouldShowRightArrow() && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '30%',
                        right: 0,
                        transform: 'translate(100%, -50%)',
                        zIndex: 10,
                        cursor: 'pointer',
                        width: 36,
                        height: 36,
                    }}
                    onClick={() => scrollToPage(currentPage + 1)}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 45 45"   // still 45 viewBox to keep same proportions
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="22.5"
                            cy="22.5"
                            r="22"
                            transform="rotate(-90 22.5 22.5)"
                            stroke="black"
                        />
                        <line
                            x1="20"
                            y1="31.5858"
                            x2="28.5858"
                            y2="23"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                        <line
                            x1="20.4142"
                            y1="14"
                            x2="29"
                            y2="22.5858"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </Box>
            )}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 2,
                    gap: 1
                }}
            >
                {[...Array(maxPage)].map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => scrollToPage(index)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: currentPage === index ? 'black' : '#ccc',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </Box>
        </Container>
    )
}

export default Carousel;