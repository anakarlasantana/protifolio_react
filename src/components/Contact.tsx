import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import emailIcon from '../assets/emailIcon.svg';
import whatsappIcon from '../assets/whatsappIcon.svg';



const simbolHead = () => {
    return (
        <Typography sx={{ color: '#42a96d', fontSize: '32px' }}>#</Typography>
    );
};


function contact() {
    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>contact</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={22} style={{ display: 'flex', paddingTop: '50px', marginLeft: '15vw', padding: '30px', }}>
                <Typography fontFamily={'Fira Code'} maxWidth={'70%'} sx={{ textIndent: '2rem', color: '#ABB2BF', textAlign: 'justify'}} >
                    I'm interested in freelance opportunities. However, if you have another request or question, please don't hesitate to call me.
                </Typography>
            </Stack>

        </Grid>
    );
};

export default contact;