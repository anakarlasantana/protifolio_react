import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";


const simbolHead = () => {
    return (
        <Typography sx={{ color: '#42a96d', fontSize: '32px' }}>#</Typography>
    );
};


function Contact() {

    const isMobileScreen = useMediaQuery('(max-width: 540px)');

    const { t } = useTranslation();


    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography fontSize={isMobileScreen ? 20 : 32} sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }}>{t("contact_title")}</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={22} style={{ display: 'flex', paddingTop: '50px', marginLeft: '15vw', padding: '30px', }}>
                <Typography fontFamily={'Fira Code'} maxWidth={'70%'} sx={{ textIndent: '2rem', color: '#ABB2BF', textAlign: 'justify'}} >
                {t("contact_text")}
                </Typography>
            </Stack>

        </Grid>
    );
};

export default Contact;