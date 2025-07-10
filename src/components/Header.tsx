import { Typography, Stack, Button, useMediaQuery, Box } from '@mui/material';
import logo from '../../src/assets/logo.png';
import ScrollLink from '../utils/ScrollLink';
import MenuMobile from './MenuMobile';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './languageSwither';


function Header() {

  const isSmallScreen = useMediaQuery('(max-width: 950px)');
  const isMobileScreen = useMediaQuery('(max-width: 540px)');

  const { t } = useTranslation();

  const simbolHead = () => {
    return <Typography color="#42a96d">#</Typography>;
  };

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '64px',
      zIndex: 1100,
      borderBottom: '1px solid #42a96d',
      backgroundColor: '#282C33',
      display: 'flex',
      alignItems: 'center',
      px: 2,
    }}>
      <Stack direction={'row'} width={'100%'} justifyContent={isSmallScreen ? "space-between" : "space-evenly"}>
        <Stack direction={'row'} width={'30%'} alignSelf={'center'} spacing={1}>
          <Stack paddingLeft={2}>
            <img src={logo} alt="" width={18} height={18} />
          </Stack>
          {isMobileScreen ? <></> :
            <Stack>
              <Typography color={'white'} fontFamily={'Fira Code'} width={'auto'}>
                Ana Karla
              </Typography>
            </Stack>
          }
        </Stack>
        {isSmallScreen ? <MenuMobile /> : <Stack direction={'row'} spacing={4} alignItems={'center'} width={'auto'}>
          <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} {t("header_home")}</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} {t("header_projects")}</Button>
          </ScrollLink>
          <ScrollLink to="aboutMe" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} {t("header_aboutme")}</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} {t("header_contact")}</Button>
          </ScrollLink>
          <LanguageSwitcher />
        </Stack>
        }

      </Stack>
    </Box>

  );
}

export default Header;
