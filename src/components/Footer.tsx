import { Typography, Stack, Divider, Box } from '@mui/material';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';



function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();


    return (
        <Stack pt={5} spacing={2}>
            <Divider sx={{ display: 'flex', backgroundColor: '#ABB2BF'}} />
            <Stack alignSelf={'center'} >
                <Box textAlign={'center'}>
                    <Stack direction={'row'} justifyContent={'center'}>
                        <img src={logo} alt="" width={18} height={18} />
                        <Typography width={'6rem'} color={'#ABB2BF'} alignSelf={'end'} fontFamily={'Fira Code'}>
                            Ana Karla
                        </Typography>
                    </Stack>
                    <Typography fontFamily={'Fira Code'} color={'#ABB2BF'}>
                        {t("fullstack")}</Typography>
                </Box>
                <footer style={{ textAlign: 'center', padding: '1rem', color: '#ABB2BF' }}>
                    © Copyright {currentYear}. Made by Ana Karla Santana
                </footer>
            </Stack>


        </Stack>
    );
}

export default Footer;