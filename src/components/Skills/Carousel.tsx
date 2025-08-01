import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { useRef, useState } from "react";

interface AutoPlayProps {
    items: { id: string; icon: string; name: string }[];
}

function AutoPlayCarousel({ items }: AutoPlayProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<any>(null);

    const settings = {
        infinite: true,
        slidesToShow: 7,         
        centerMode: true,
        centerPadding: "60px",   
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        arrows: false,
        swipeToSlide: true,
        pauseOnHover: false,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };




    return (
        <div className="slider-container" >
            <Slider {...settings} ref={sliderRef}>
                {items.map(({ id, icon, name }, index) => {
                    const isCenter = index === currentSlide;
                    return (
                        <div key={id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={1}
                                height={"250px"}
                                sx={{
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease",
                                    transform: isCenter ? "scale(1.3)" : "scale(1)",
                                    opacity: isCenter ? 1 : 0.6,
                                    filter: isCenter ? "none" : "grayscale(40%)",
                                    textAlign: "center",
                                    userSelect: "none",
                                }}
                            >
                                <img src={icon} alt={`${id}Icon`} width={80} height={80} />
                                {isCenter && (
                                    <Typography
                                        color="#42a96d"
                                        textAlign="center"
                                        fontWeight={500}
                                    >
                                        {name}
                                    </Typography>
                                )}
                            </Stack>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default AutoPlayCarousel;
