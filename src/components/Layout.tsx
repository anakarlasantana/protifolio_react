import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import logo from '../../src/assets/logo.svg'
import foto from '../../src/assets/foto.png'
import elementDots from '../../src/assets/elementDots.svg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';




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
    autoplaySpeed: 3000,
};

const customPhrases = {
    fontFamily: 'Fira Code',
    height: '12rem',
    width: '50rem',
    alignSelf: 'center',
    margin: '7rem',
}


function Layout() {

    return (
        <Stack spacing={2} width={'70vw'} height={'40vw'} marginLeft={'15vw'} border={1} >
            <Box margin={10} marginTop={20} width={'40rem'}>
                <Typography fontSize={'32px'}>
                    <span style={white}>Ana Karla é uma</span>
                    <span style={green}> fullstack developer</span>
                </Typography>
                <Typography marginBottom={2} sx={description}>Ela cria sites responsivos onde a tecnologia encontra a criatividade</Typography>
                <Button variant="contained" sx={customButton} color="primary">Entre em contato</Button>
            </Box>
            <Box>
                <Stack sx={{ position: 'absolute', top: '16rem', right: '45rem' }}>
                    <img src={logo} alt="logo" width={134} height={119} />
                </Stack>
                <Stack sx={{ position: 'absolute', top: '24rem', right: '27rem' }}>
                    <img src={elementDots} alt="foto" style={{ width: '84px', height: '84px' }} />
                </Stack>
                <Stack sx={{ position: 'absolute', top: '10rem', right: '30rem' }}>
                    <img src={foto} alt="foto" style={{ width: '300px', height: '360px' }} />
                </Stack>
                <Stack direction={'row'} sx={{ border: '1px solid #ABB2BF', width: '24rem', height: '2rem', marginLeft: '50rem' }}>
                    <Paper sx={{ border: '1px solid #ABB2BF', borderRadius: '0', backgroundColor: 'green', height: '15px', width: '15px', marginLeft: '30px', alignSelf: 'center' }}></Paper>
                    <Typography sx={{ fontFamily: 'Fira Code', color: '#ABB2BF', margin: '5px' }}>Trabalhando em novos projetos</Typography>
                </Stack>
            </Box>
            <Stack style={customPhrases} >
                <Slider {...settings}>
                    {phrasesLayout.map((phraseObj, index) => (
                        <div key={index}>
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


                        </div>
                    ))}
                </Slider>
            </Stack>

        </Stack>
    );
}

export default Layout;
