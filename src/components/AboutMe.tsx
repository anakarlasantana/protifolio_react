import { Stack } from "@mui/joy";
import { Divider, Grid, Typography } from "@mui/material";
import fotoTwo from '../assets/fotoTwo.jpg'

const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function aboutMe() {
    return (
        <Grid container width={'100%'}>
            <Stack spacing={1} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>sobre mim</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={10} style={{ paddingTop: '50px', marginLeft: '15vw', padding: '30px' }}>
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
                        Eu era aquela garota que adorava desmontar relógios, abrir gabinetes, formatar computadores e até mesmo programar meu pequeno e amado Galaxy Y, tudo movida pela curiosidade e pela vontade de resolver problemas. Lembro com carinho da época em que fiquei viciada em aprender Illustrator e Photoshop. Eu criava logotipos, montava layouts, fazia cartões de visita e de casamento, editava fotos e até produzia as artes dos banners para os meus colegas, tudo porque me dava um prazer imenso.
                    </Typography>
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
                        Hoje em dia, percebo que nem todo mundo tem essa facilidade com tecnologia. Passar horas na frente de um monitor criando é, na verdade, uma profissão legítima. Sempre fui apaixonada por tecnologia, mesmo quando não acreditava em mim mesma. Por isso, hoje estou reavaliando meu caminho e concentrando minhas energias no meu desenvolvimento profissional como desenvolvedora fullstack, com foco em JavaScript, mas sempre aberta a aprender novas tecnologias. A diversão continua! 😉🚀
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