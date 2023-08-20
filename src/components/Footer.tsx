import { Typography, Stack, Divider, Box } from '@mui/material';
import logo from '../assets/logo.svg';



function Footer() {
    const currentYear = new Date().getFullYear();


    return (
        <Stack height={'10rem'}>
            <Divider sx={{ display: 'flex', backgroundColor: '#ABB2BF', width: '100%' }} />
            <Stack alignSelf={'center'} m={4}>
                <Box textAlign={'center'}>
                <Stack direction={'row'} marginLeft={'10rem'}>
                    <img src={logo} alt="" width={30} height={30} />
                    <Typography width={'6rem'} color={'#ABB2BF'} alignSelf={'end'} fontFamily={'Fira Code'}>
                        Ana Karla 
                    </Typography>
                </Stack>
                <Typography fontFamily={'Fira Code'} color={'#ABB2BF'}>Desenvolvedora fullstack | Fullstack developer</Typography>
                </Box>
                <footer style={{ textAlign: 'center', padding: '1rem', color: '#ABB2BF' }}>
                    © Copyright {currentYear}. Made by Ana Karla Santana
                </footer>
            </Stack>


        </Stack>
    );
}

export default Footer;