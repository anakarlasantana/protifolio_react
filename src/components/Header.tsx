import { Typography, Stack, Button } from '@mui/material';
import logo from '../../src/assets/logo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Divider, Grid } from '@mui/joy';


const simbolHead = () => {
  return (
    <Typography color={'#42a96d'}>#</Typography>
  );

};


function Header() {


  return (
    <Grid container width={'100%'} height={'70px'} sx={{ borderBottom: '1px solid #42a96d', top: '0', position: 'fixed', zIndex: '1000', backgroundColor: '#282C33' }}>
      <Stack direction={'row'} paddingLeft={'18rem'} spacing={70}>
        <Stack direction={'row'} width={'20rem'} alignItems={'center'}>
          <Stack >
            <img src={logo} alt="" width={30} height={30} />
          </Stack>
          <Typography color={'white'} fontFamily={'Fira Code'}>
            Ana Karla
          </Typography>
        </Stack>
        <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} home</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} works</Button>
          </ScrollLink>
          <ScrollLink to="aboutMe" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} about-me</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} contact</Button>
          </ScrollLink>
        </Stack>
      </Stack>
    </Grid>

  );
}

export default Header;
