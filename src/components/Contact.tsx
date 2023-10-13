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
            <Stack spacing={1} direction={'row'} width={'100%'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Stack>
                    <Typography width={isMobileScreen ? '7rem' : '10rem'} fontSize={isMobileScreen ? 20 : 32} sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }}>{t("contact_title")}</Typography>
                </Stack>
                <Stack width={'50%'}>
                    <Divider sx={{ backgroundColor: '#42a96d' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={5} style={{ marginLeft: '15vw', padding: '30px', maxWidth: '65%' }}>
                <Typography fontFamily={'Fira Code'}
                        color={'#ABB2BF'}
                        style={{
                            textAlign: 'justify',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            textIndent: '2rem',
                        }}>
                    {t("contact_text")}
                </Typography>
            </Stack>
        </Grid>

    );
};

export default Contact;