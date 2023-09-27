import {Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linedingIcon from '../../src/assets/linkedinIcon.svg';
import fotoOne from '../assets/fotoOne.png';
import dots from '../assets/elementDots.svg';
import square from '../assets/square.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from "@mui/joy";
import './LayoutScreen.css'


const green = {
    fontFamily: 'Fira Code',
    color: '#42a96d',
    fontSize: '40px'

}

const white = {
    fontFamily: 'Fira Code',
    color: 'white',
    fontSize: '40px'
}

const description = {
    fontFamily: 'Fira Code',
    color: '#ABB2BF',
    fontSize: '18px',
    width: '30rem'
}

const customButton = {
    border: '1px solid #42a96d',
    borderRadius: '0',
    fontFamily: 'Fira Code',
    textTransform: 'none',
}


function Layout() {

    return (
        <Grid container width={'100%'} justifyContent={'center'} >
            <Stack p={'10%'} className="layout-screen">
                <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Stack className="padding-right" paddingRight={35}>
                        <Stack >
                            <Typography className="font-style" style={white}>Hi</Typography>
                            <Typography style={white}>I'm Ana Karla</Typography>
                            <Typography style={green}> fullstack developer</Typography>
                            <Typography sx={description}>This means I know how to copy and paste, the right code for the right problem.</Typography>
                        </Stack>
                        <Stack paddingTop={5} width={'30%'}>
                            <Button variant="contained" sx={customButton} color="primary" href="https://wa.me/558591870847?text=Ol%C3%A1%2C%20te%20conheci%20pelo%20portf%C3%B3lio%21" target="_blank">Contact me</Button>
                            <Stack direction={'row'} alignSelf={'center'}>
                                <IconButton href=" https://github.com/anakarlasantana" target="_blank"><img src={githubIcon} alt="" /></IconButton>
                                <IconButton href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                                <IconButton href="https://www.linkedin.com/in/anakarlasantana/" target="_blank"><img src={linedingIcon} alt="" /></IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack className="photo-screen" style={{ position: 'relative' }}>
                            <img src={fotoOne} alt="foto" style={{ width: '300px', height: '375px', borderRadius: '200px', zIndex: '2' }} />
                            <img src={dots} style={{ width: '5rem', height: '5rem', position: 'absolute', top: '20%', left: '60%', zIndex: '1' }} />
                            <img src={square} style={{ width: '8rem', height: '8rem', position: 'absolute', top: '60%', right: '70%', zIndex: '1' }} />
                            <img src={square} style={{ width: '4rem', height: '4rem', position: 'absolute', top: '85%', right: '60%', zIndex: '1' }} />
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>
        </Grid>
    );
}

export default Layout;
