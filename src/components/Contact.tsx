import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import emailIcon from '../assets/emailIcon.svg';
import whatsappIcon from '../assets/whatsappIcon.svg';



const simbolHead = () => {
    return (
        <Typography sx={{ color: '#42a96d', fontSize: '32px'}}>#</Typography>
    );
};


function contact() {
    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'} style={{alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>contatos</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={22} style={{ display: 'flex', paddingTop: '50px', marginLeft: '15vw', padding: '30px',  }}>
                <Typography fontFamily={'Fira Code'} maxWidth={'50rem'} sx={{ textIndent: '2rem',  color: '#ABB2BF'}} >
                    Estou interessado em oportunidades freelance. No entanto, se você tiver outro pedido ou pergunta, não hesite em me chamar.
                </Typography>
                <Stack textAlign={'center'} style={{ display: 'inline-block', border: '1px solid #ABB2BF', width: '10rem' }}>
                    <Typography fontFamily={'Fira Code'} color={"white"} fontSize={'12px'} margin={1}>
                        Me chama aqui:
                    </Typography>
                    <IconButton href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                    <IconButton
                        href="https://wa.me/558591870847?text=Ol%C3%A1%2C%20te%20conheci%20pelo%20portf%C3%B3lio%21"
                        target="_blank" >
                        <img src={whatsappIcon} alt="" />
                    </IconButton>
                </Stack>
            </Stack>

        </Grid>
    );
};

export default contact;