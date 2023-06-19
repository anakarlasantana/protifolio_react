import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import javascriptIcon from '../assets/javascriptIcon.png';
import nodeIcon from '../assets/nodeIcon.png';
import htmlIcon from '../assets/hmlIcon.png';
import cssIcon from '../assets/cssIcon.png';
import javaIcon from '../assets/javaIcon.png';
import gitIcon from '../assets/gitIcon.png';








const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    width: 80,
    alignSelf: 'center',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],

    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 6,
        backgroundColor: theme.palette.mode === 'light' ? '#42a96d' : '#308fe8',
        animation: 'progressAnimation 2s linear infinite',
    },
    '@keyframes progressAnimation': {
        '0%': { width: '0%' },
        '50%': { width: '100%' },
        '100%': { width: '0%' },
    },
}));


function Skills() {
    return (
        <Grid >
            <Stack spacing={1} direction={'row'} style={{ display: 'flex', alignItems: 'center', border: '1px solid black', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>skills</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack spacing={5} style={{  border: '1px solid black', paddingTop: '50px', marginLeft: '15vw',  padding: '30px' }}>
                <Stack direction={'column'}>
                    <Stack direction={'row'} spacing={2}>
                        <img src={gitIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={99} />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img src={htmlIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={99} />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img src={cssIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={99} />
                    </Stack>
                </Stack>
                <Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img src={javascriptIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={50} />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img src={nodeIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={99} />
                    </Stack>
                    <Stack direction={'row'} spacing={2}>
                        <img src={javaIcon} alt="javascriptIcon" width={80} />
                        <BorderLinearProgress variant="determinate" value={99} />
                    </Stack>

                </Stack>


            </Stack>

        </Grid>
    )
}

export default Skills;