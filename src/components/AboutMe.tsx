import { Stack } from "@mui/joy";
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import fotoTwo from '../assets/fotoTwo.jpg'
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";


const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function AboutMe() {
    const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth >= 1200);

    const isMobileScreen = useMediaQuery('(max-width: 540px)');

    const { t } = useTranslation();


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
            <Stack spacing={1} direction={'row'} width={'100%'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Stack>
                    <Typography width={isMobileScreen ? '7rem' : '10rem'} fontSize={isMobileScreen ? 20 : 32} sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }}>{t("aboutme_title")}</Typography>
                </Stack>
                <Stack width={'50%'}>
                    <Divider sx={{ backgroundColor: '#42a96d' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={5} width={'65%'} style={{ marginLeft: '15vw', padding: '30px' }}>
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
                        {t("aboutme_text")}
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