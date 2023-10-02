import { Typography, Stack, Button, useMediaQuery } from '@mui/material';
import logo from '../../src/assets/logo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Grid } from '@mui/joy';
import MenuMobile from './MenuMobile';


function Header() {

  const isSmallScreen = useMediaQuery('(max-width: 950px)');
  const isMobileScreen = useMediaQuery('(max-width: 540px)');


  const simbolHead = () => {
    return <Typography color="#42a96d">#</Typography>;
  };

  return (
    <Grid container width={'100%'} height={'8%'} position={'absolute'} sx={{ borderBottom: '1px solid #42a96d', top: '0', position: 'fixed', zIndex: '1000', backgroundColor: '#282C33' }}>
      <Stack direction={'row'} width={'100%'} justifyContent={isSmallScreen ? "space-between" : "space-evenly"}>
        <Stack direction={'row'} width={'50%'} alignSelf={'center'} spacing={1}>
          <Stack paddingLeft={2}>
            <img src={logo} alt="" width={18} height={18} />
          </Stack>
          {isMobileScreen ? <></> :
            <Stack>
              <Typography color={'white'} fontFamily={'Fira Code'} width={'100%'}>
                Ana Karla
              </Typography>
            </Stack>
          }
        </Stack>
        {isSmallScreen ? <MenuMobile /> : <Stack direction={'row'} spacing={4} alignItems={'center'}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} home</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} projects</Button>
          </ScrollLink>
          <ScrollLink to="aboutMe" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} about me</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} contact</Button>
          </ScrollLink>
        </Stack>
        }

      </Stack>
    </Grid>

  );
}

export default Header;
