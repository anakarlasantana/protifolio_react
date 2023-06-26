import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import gitIcon from '../assets/gitIcon.png';
import javascriptIcon from '../assets/javascriptIcon.png';
import reactIcon from '../assets/reactIcon.png';


import React from "react";

const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: '10rem',
    alignSelf: 'center',
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    '& .MuiLinearProgress-bar': {
        borderRadius: 6,
        backgroundColor: theme.palette.mode === 'light' ? '#42a96d' : '#308fe8',
    },
}));

const IconWrapper = styled('div')(({ theme }) => ({
    '& img': {
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        pointerEvents: 'none',
    },
    '&:hover img': {
        transform: 'scale(1.1)',
        pointerEvents: 'auto',
    },
}));

const ProgressWrapper = styled('div')<{ visible: boolean }>(({ visible }) => ({
    position: 'relative',
    opacity: visible ? 1 : 0,
    transition: 'opacity 0.3s ease',
}));



function Skills() {
    const [isGitIconHovered, setIsGitIconHovered] = React.useState(false);
    const [isGitIconDisabled, setIsGitIconDisabled] = React.useState(true);
    const [progressOfGit, setProgressOfGit] = React.useState(100);

    const [isJsIconHovered, setIsJsIconHovered] = React.useState(false);
    const [isJsIconDisabled, setIsJsIconDisabled] = React.useState(true);
    const [progressOfJs, setProgressOfJs] = React.useState(100);

    const [isReactIconHovered, setIsReactIconHovered] = React.useState(false);
    const [isReactIconDisabled, setIsReactIconDisabled] = React.useState(true);
    const [progressOfReact, setProgressOfReact] = React.useState(90);

    const handleGitIconMouseEnter = () => {
        setIsGitIconHovered(true);
        setIsGitIconDisabled(false);
    };

    const handleGitIconMouseLeave = () => {
        setIsGitIconHovered(false);
        setIsGitIconDisabled(true);
    };

    const handleJsIconMouseEnter = () => {
        setIsJsIconHovered(true);
        setIsJsIconDisabled(false);
    };

    const handleJsIconMouseLeave = () => {
        setIsJsIconHovered(false);
        setIsJsIconDisabled(true);
    };


    const handleReactIconMouseEnter = () => {
        setIsReactIconHovered(true);
        setIsReactIconDisabled(false);
    };

    const handleReactIconMouseLeave = () => {
        setIsReactIconHovered(false);
        setIsReactIconDisabled(true);
    };




    return (
        <Grid>
            <Stack spacing={1} direction={'row'} style={{ display: 'flex', alignItems: 'center', border: '1px solid black', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>skills</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={10} style={{ border: '1px solid black', paddingTop: '50px', marginLeft: '15vw', padding: '30px' }}>
                <Stack spacing={4}>
                    <Stack direction="column" alignItems="center" >
                        <Stack>
                            <IconWrapper
                                style={{ filter: isGitIconDisabled ? 'grayscale(100%)' : 'none' }}
                                onMouseEnter={handleGitIconMouseEnter}
                                onMouseLeave={handleGitIconMouseLeave}
                            >
                                <img
                                    src={gitIcon}
                                    alt="gitIcon"
                                    width={120}
                                    style={{ transform: isGitIconHovered ? 'scale(1.1)' : 'scale(1)' }}
                                />
                            </IconWrapper>
                        </Stack>
                        <Stack marginTop={2}>
                            <ProgressWrapper visible={isGitIconHovered} >
                                <BorderLinearProgress variant="determinate" value={progressOfGit} />
                                <Typography alignSelf="center" color="#42a96d">
                                    {`${progressOfGit}%`}
                                </Typography>
                            </ProgressWrapper>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <Stack direction="column" alignItems="center">
                        <Stack>
                            <IconWrapper
                                style={{ filter: isJsIconDisabled ? 'grayscale(100%)' : 'none' }}
                                onMouseEnter={handleJsIconMouseEnter}
                                onMouseLeave={handleJsIconMouseLeave}
                            >
                                <img
                                    src={javascriptIcon}
                                    alt="javascriptIcon"
                                    width={120}
                                    style={{ transform: isJsIconHovered ? 'scale(1.1)' : 'scale(1)' }}
                                />
                            </IconWrapper>
                        </Stack>
                        <Stack marginTop={2}>
                            <ProgressWrapper visible={isJsIconHovered}>
                                <BorderLinearProgress variant="determinate" value={progressOfJs} />
                                <Typography alignSelf="center" color="#42a96d">
                                    {`${progressOfJs}%`}
                                </Typography>
                            </ProgressWrapper>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    <Stack direction="column" alignItems="center">
                        <Stack>
                            <IconWrapper
                                style={{ filter: isReactIconDisabled ? 'grayscale(100%)' : 'none' }}
                                onMouseEnter={handleReactIconMouseEnter}
                                onMouseLeave={handleReactIconMouseLeave}
                            >
                                <img
                                    src={reactIcon}
                                    alt="javascriptIcon"
                                    width={120}
                                    style={{ transform: isReactIconHovered ? 'scale(1.1)' : 'scale(1)' }}
                                />
                            </IconWrapper>
                        </Stack>
                        <Stack marginTop={2}>
                            <ProgressWrapper visible={isReactIconHovered}>
                                <BorderLinearProgress variant="determinate" value={progressOfReact} />
                                <Typography alignSelf="center" color="#42a96d">
                                    {`${progressOfReact}%`}
                                </Typography>
                            </ProgressWrapper>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Grid >
    );
}

export default Skills;
