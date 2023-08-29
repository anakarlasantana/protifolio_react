import { Box, Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linedingIcon from '../../src/assets/linkedinIcon.svg';
import fotoOne from '../assets/fotoOne.png';
import dots from '../assets/elementDots.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Grid } from "@mui/joy";




const green = {
    fontFamily: 'Fira Code',
    color: '#42a96d',
}

const white = {
    fontFamily: 'Fira Code',
    color: 'white'
}

const description = {
    fontFamily: 'Fira Code',
    color: '#ABB2BF',
    fontSize: '16px',
    width: '30rem'
}

const customButton = {
    border: '1px solid #42a96d',
    borderRadius: '0',
    fontFamily: 'Fira Code',
    textTransform: 'none',
}

const phrasesLayout = [
    { phrase: "Você precisa fazer aquilo que pensa que não é capaz de fazer.", author: "Eleanor Roosevelt" },
    { phrase: "Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida, basta que lute e aguarde um novo amanhecer.", author: "Margaret Thatcher" },
    { phrase: "Você precisa fazer aquilo que pensa que não é capaz de fazer.", author: "Coco Chanel" },

]

const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
};

const customPhrases = {
    fontFamily: 'Fira Code',
    height: '12rem',
    width: '50rem',
    alignSelf: 'center',
    margin: '6rem',
}


function Layout() {

    return (
        <Grid container width={'100%'} marginTop={10}>
            <Stack spacing={2} width={'20vw'} height={'46vw'} marginLeft={'15vw'}>
                <Stack>
                <Box paddingTop={'8rem'} paddingLeft={'4rem'} width={'100%'} >
                    <Typography fontSize={'32px'}>
                        <span style={white}>Sou Ana Karla</span>
                        <span style={green}> fullstack developer</span>
                    </Typography>
                    <Typography  sx={description}>Isso significa que sei copiar e colar o código certo para o problema certo.</Typography>
                    <Box paddingTop={2}>
                    <Button variant="contained" sx={customButton} color="primary" href="mailto:anakarla.p.santana@gmail.com">Entre em contato</Button>
                    <Stack direction={'row'} paddingLeft={2}>
                        <IconButton href=" https://github.com/anakarlasantana" target="_blank"><img src={githubIcon} alt="" /></IconButton>
                        <IconButton href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                        <IconButton href="https://www.linkedin.com/in/anakarlasantana/" target="_blank"><img src={linedingIcon} alt="" /></IconButton>
                    </Stack>
                    </Box>
                </Box>
                <Box>
                    <Stack sx={{ position: 'absolute', top: '10rem', right: '28rem' }}>
                        <img src={fotoOne} alt="foto" style={{ width: '300px', height: '375px', borderRadius: '200px' }} />
                    </Stack>
                </Box>
                </Stack>
                <Stack style={customPhrases} paddingTop={'11rem'} paddingLeft={'65rem'}>
                    <Slider {...settings}>
                        {phrasesLayout.map((phraseObj, index) => (
                            <Stack key={index}>
                                <Typography fontSize={'24px'} color={white} align="center"
                                    style={{
                                        display: 'inline-block',
                                        border: '1px solid #ABB2BF',

                                    }} >
                                    <FormatQuoteIcon style={{ transform: 'scaleX(-1)' }} />
                                    {phraseObj.phrase}
                                    <FormatQuoteIcon style={{ color: 'white' }} />

                                </Typography>
                                <Typography fontSize={'24px'} color={"grey"}
                                    style={{
                                        display: 'inline-block',
                                        border: '1px solid #ABB2BF',
                                        padding: '5px',
                                        marginLeft: '34rem'
                                    }} >
                                    - {phraseObj.author}
                                </Typography>
                            </Stack>
                        ))}
                    </Slider>
                </Stack>

            </Stack>
        </Grid>
    );
}

export default Layout;
