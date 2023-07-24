import { Stack } from "@mui/joy";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import fotoTwo from '../assets/fotoTwo.jpg'

const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function aboutMe() {
    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'}  style={{alignItems: 'center', marginLeft: '15vw'}}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>about me</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={10} style={{paddingTop: '50px', marginLeft: '15vw', padding: '30px'}}>
                <Stack width={'50rem'}>
                    <Typography
                        fontFamily={'Fira Code'}
                        maxWidth={'80rem'}
                        color={'#ABB2BF'}
                        style={{
                            textAlign: 'justify',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            textIndent: '2rem',
                        }}>
                        Era uma garota de desmontar relógios, abrir gabinetes, formatar computadores e até programar o meu pequeno e amado Galaxy Y. Por pura curiosidade e vontade de resolver problemas.
                        Lembro com carinho o tempo que fiquei viciada em aprender Illustrator e Photoshop. Fazia logotipos, montava layouts, criava cartão de visita e de casamento, editava fotos e até criava as artes dos banners para os meus colegas. Tudo isso por puro prazer.
                        Hoje percebo que não é todo mundo que tem essa facilidade com tecnologia e criação. Que ficar horas na frente de um monitor criando, também é profissão.
                        Sempre fui apaixonada por tecnologia e não acreditava em mim. Por isso, hoje estou recalculando a rota e dedicando minhas energias em me desenvolver profissionalmente na área de programação. Abaixo estão as minhas últimas conquistas. Enjoy ;).
                    </Typography>
                </Stack>
                <Stack width={'20rem'} height={'20rem'}>
                    <img src={fotoTwo} alt="foto" />
                </Stack>
            </Stack>
        </Grid>
    );
};

export default aboutMe;