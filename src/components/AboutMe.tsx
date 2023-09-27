import { Stack } from "@mui/joy";
import { Divider, Grid, Typography } from "@mui/material";
import fotoTwo from '../assets/fotoTwo.jpg'
import './AboutMeScreen.css'
import React, { useEffect } from "react";


const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function AboutMe() {
    const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth >= 1200);    console.log(isSmallScreen);
    
    React.useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Stack >
                    <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>about me</Typography>
                </Stack>
                <Stack className="typo-aboutme" >
                    <Divider sx={{ backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack  direction={'row'} spacing={5} width={'65%'} className="style-reset-aboutme" style={{ marginLeft: '15vw', padding: '30px' }}>
                <Stack>
                    <Typography
                        fontFamily={'Fira Code'}
                        color={'#ABB2BF'}
                        style={{
                            textAlign: 'justify',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            textIndent: '2rem',
                        }}>
                        I was that girl who loved taking apart watches, opening cabinets, formatting computers and even programming my little beloved Galaxy Y, all driven by curiosity and the desire to solve problems. I fondly remember the time when I became addicted to learning Illustrator and Photoshop. I created logos, created layouts, made business and wedding cards, edited photos and even produced banner art for my colleagues, all because it gave me immense pleasure.
                    </Typography>
                    <Typography
                        fontFamily={'Fira Code'}
                        color={'#ABB2BF'}
                        style={{
                            textAlign: 'justify',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            textIndent: '2rem',
                        }}>
                        Nowadays, I realize that not everyone has this facility with technology. Spending hours in front of a monitor creating is actually a legitimate profession. I've always been passionate about technology, even when I didn't believe in myself. Therefore, today I am reevaluating my path and focusing my energies on my professional development as a fullstack developer, focusing on JavaScript, but always open to learning new technologies. The fun continues! 😉🚀
                    </Typography>
                </Stack>
                {isSmallScreen ? 
                    <Stack>
                        <img
                            src={fotoTwo}
                            style={{ width: '20rem', height: '20rem' }}
                            alt="foto"
                        />
                    </Stack> : <></>
                }
            </Stack>
        </Grid>
    );
};

export default AboutMe;