import { Stack, Typography, useMediaQuery } from "@mui/material";
import fotoTwo from '../assets/fotoTwo.jpg'
import React from "react";
import { useTranslation } from "react-i18next";
import SectionDivider from "./SectionDivider";
import { Tag } from "@mui/icons-material";


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
        <Stack spacing={2}>
            <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"aboutme_title"} />
            <Stack direction={'row'} spacing={5}>
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
        </Stack>
    );
};

export default AboutMe;