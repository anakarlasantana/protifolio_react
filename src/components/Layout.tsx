import { Button, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linedingIcon from '../../src/assets/linkedinIcon.svg';
import fotoOne from '../assets/fotoOne.png';
import dots from '../assets/elementDots.svg';
import square from '../assets/square.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/joy";
import { useTranslation } from "react-i18next";
import './Layout.css'

const green = {
    fontFamily: 'Fira Code',
    color: '#42a96d',
}

const white = {
    fontFamily: 'Fira Code',
    color: 'white',
}

const description = {
    fontFamily: 'Fira Code',
    color: '#ABB2BF',
}

const customButton = {
    border: '1px solid #42a96d',
    borderRadius: '0',
    fontFamily: 'Fira Code',
    textTransform: 'none',
}

const smallIcon = {
    width: '10px'
}


function Layout() {

    const isMediumScreen = useMediaQuery("(max-width: 1400px)");
    const isSmallScreen = useMediaQuery('(max-width: 950px)');
    const isMobileScreen = useMediaQuery('(max-width: 540px)');


    const { t } = useTranslation();

    return (
        <Grid container width={'100%'} justifyContent={'center'}>
            <Stack padding={'10%'} marginTop={3}>
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={isMediumScreen ? 0 : 20}>
                    <Stack>
                        <Stack>
                            <Typography fontSize={isMobileScreen ? 20 : 40} style={white}>{t("layout_hi")}</Typography>
                            <Typography fontSize={isMobileScreen ? 20 : 40} style={white}>{t("layout_name")}</Typography>
                            <Typography fontSize={isMobileScreen ? 20 : 40} style={green}>{t("layout_office")}</Typography>
                            <Typography  width={'80%'} fontSize={isMobileScreen ? 12 : 18} sx={description}>{t("layout_script")}</Typography>
                        </Stack>
                        <Stack paddingTop={4} maxWidth={'30%'} minWidth={'130px'}>
                            <Button size={isMobileScreen ? 'small' : 'medium'} variant="contained" sx={customButton} color="primary" href="https://wa.me/558591870847?text=Ol%C3%A1%2C%20te%20conheci%20pelo%20portf%C3%B3lio%21" target="_blank">{t("layout_button")}</Button>
                            {isMobileScreen ? <></> : <Stack direction={'row'} alignSelf={'center'}>
                                <IconButton  href=" https://github.com/anakarlasantana" target="_blank"><img src={githubIcon} alt="" /></IconButton>
                                <IconButton  href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                                <IconButton  href="https://www.linkedin.com/in/anakarlasantana/" target="_blank"><img src={linedingIcon} alt="" /></IconButton>
                            </Stack>}
                        </Stack>
                    </Stack>
                    {isSmallScreen ? <></> :
                        <Stack>
                            <Stack className="photo-screen" style={{ position: 'relative' }}>
                                <img src={fotoOne} alt="foto" style={{ width: '300px', height: '375px', borderRadius: '200px', zIndex: '2' }} />
                                <img src={dots} alt="dots" style={{ width: '5rem', height: '5rem', position: 'absolute', top: '20%', left: '60%', zIndex: '1' }} />
                                <img src={square} alt="square" style={{ width: '8rem', height: '8rem', position: 'absolute', top: '60%', right: '70%', zIndex: '1' }} />
                                <img src={square} alt="square" style={{ width: '4rem', height: '4rem', position: 'absolute', top: '85%', right: '60%', zIndex: '1' }} />
                            </Stack>
                        </Stack>
                    }
                </Stack>
            </Stack>
        </Grid>
    );
}

export default Layout;
