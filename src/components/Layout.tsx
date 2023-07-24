import { Box, Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linedingIcon from '../../src/assets/linkedinIcon.svg';
import fotoOne from '../assets/fotoOne.png'
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
    textTransform: 'none'
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
        <Grid container width={'100%'}>
            <Stack spacing={2} width={'70vw'} height={'43vw'} marginLeft={'15vw'}>
                <Box margin={15} marginTop={20} width={'40rem'} maxHeight={'10rem'}>
                    <Typography fontSize={'32px'}>
                        <span style={white}>Ana Karla é uma</span>
                        <span style={green}> fullstack developer</span>
                    </Typography>
                    <Typography marginBottom={2} sx={description}>Ela cria sites responsivos onde a tecnologia encontra a criatividade</Typography>
                    <Button variant="contained" sx={customButton} color="primary">Entre em contato</Button>
                    <Stack direction={'row'} paddingLeft={2}>
                        <IconButton href=" https://github.com/anakarlasantana" target="_blank"><img src={githubIcon} alt="" /></IconButton>
                        <IconButton href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                        <IconButton href="https://www.linkedin.com/in/anakarlasantana/" target="_blank"><img src={linedingIcon} alt="" /></IconButton>
                    </Stack>
                </Box>
                <Box>
                    <Stack sx={{ position: 'absolute', top: '10rem', right: '30rem' }}>
                        <img src={fotoOne} alt="foto" style={{ width: '300px', height: '375px', borderRadius: '200px' }} />
                    </Stack>
                </Box>
                <Stack style={customPhrases} >
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
