import React from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import gitIcon from '../assets/gitIcon.png';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/reactIcon.png';
import nodeIcon from '../assets/nodeIcon.png';
import javaIcon from '../assets/javaIcon.svg';
import phytonIcon from '../assets/python.svg';
import typescriptIcon from '../assets/typescript.svg';
import muiIcon from '../assets/materialMuiIcon.png';
import figmaIcon from '../assets/figma.svg';
import jiraIcon from '../assets/jiraIcon.svg';
import skillsiconesGroup from '../assets/skillsIconessGroup.svg';
import mongoDBIcon from '../assets/mongodb.svg';
import sqlIteIcon from '../assets/sqlite.svg';
import jestIcon from '../assets/jestIcon.svg';
import elementDots from '../../src/assets/elementDots.svg'








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
    const [hoveredIcon, setHoveredIcon] = React.useState('');

    const iconData = [
        {
            id: 'git',
            icon: gitIcon,
            progress: 100,
        },
        {
            id: 'js',
            icon: javascriptIcon,
            progress: 100,
        },
        {
            id: 'react',
            icon: reactIcon,
            progress: 90,
        },
        {
            id: 'node',
            icon: nodeIcon,
            progress: 80,
        },
        {
            id: 'java',
            icon: javaIcon,
            progress: 40,
        },
        {
            id: 'phyton',
            icon: phytonIcon,
            progress: 40,
        },
    ];

    const iconDataTwo = [
        {
            id: 'typescript',
            icon: typescriptIcon,
            progress: 80,
        },
        {
            id: 'mui',
            icon: muiIcon,
            progress: 100,
        },
        {
            id: 'figma',
            icon: figmaIcon,
            progress: 80,
        },
        {
            id: 'jira',
            icon: jiraIcon,
            progress: 80,
        },

    ];

    const iconDataTree = [
        {
            id: 'sqLite',
            icon: sqlIteIcon,
            progress: 60,
        },
        {
            id: 'jest',
            icon: jestIcon,
            progress: 30,
        },
        {
            id: 'mongoDb',
            icon: mongoDBIcon,
            progress: 60,
        },

    ];

    const handleIconMouseEnter = (id: string) => {
        setHoveredIcon(id);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon('');
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
            <Stack direction={'row'} spacing={12} style={{ paddingTop: '50px', marginLeft: '15vw', padding: '35px' }}>
                {iconData.map(({ id, icon, progress }) => (
                    <Stack key={id} >
                        <Stack direction="column" alignItems="center" maxWidth={'8rem'}>
                            <Stack>
                                <IconWrapper
                                    style={{ filter: hoveredIcon !== id ? 'grayscale(100%)' : 'none' }}
                                    onMouseEnter={() => handleIconMouseEnter(id)}
                                    onMouseLeave={handleIconMouseLeave}
                                >
                                    <img
                                        src={icon}
                                        alt={`${id}Icon`}
                                        width={100}
                                        style={{ transform: hoveredIcon === id ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                </IconWrapper>
                            </Stack>
                            <Stack marginTop={2}>
                                <ProgressWrapper visible={hoveredIcon === id}>
                                    <BorderLinearProgress variant="determinate" value={progress} />
                                    <Typography alignSelf="center" color="#42a96d">
                                        {`${progress}%`}
                                    </Typography>
                                </ProgressWrapper>
                            </Stack>
                        </Stack>

                    </Stack>
                ))}
            </Stack>
            <Stack direction={'row'} spacing={12} style={{ marginLeft: '15vw', padding: '35px' }}>
                {iconDataTwo.map(({ id, icon, progress }) => (
                    <Stack key={id} >
                        <Stack direction="column" alignItems="center" maxWidth={'8rem'}>
                            <Stack>
                                <IconWrapper
                                    style={{ filter: hoveredIcon !== id ? 'grayscale(100%)' : 'none' }}
                                    onMouseEnter={() => handleIconMouseEnter(id)}
                                    onMouseLeave={handleIconMouseLeave}
                                >
                                    <img
                                        src={icon}
                                        alt={`${id}Icon`}
                                        width={100}
                                        style={{ transform: hoveredIcon === id ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                </IconWrapper>
                            </Stack>
                            <Stack marginTop={2}>
                                <ProgressWrapper visible={hoveredIcon === id}>
                                    <BorderLinearProgress variant="determinate" value={progress} />
                                    <Typography alignSelf="center" color="#42a96d">
                                        {`${progress}%`}
                                    </Typography>
                                </ProgressWrapper>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            <Stack direction={'row'} spacing={12} style={{ marginLeft: '15vw', padding: '35px' }}>
                {iconDataTree.map(({ id, icon, progress }) => (
                    <Stack key={id} >
                        <Stack direction="column" alignItems="center" maxWidth={'8rem'}>
                            <Stack>
                                <IconWrapper
                                    style={{ filter: hoveredIcon !== id ? 'grayscale(100%)' : 'none' }}
                                    onMouseEnter={() => handleIconMouseEnter(id)}
                                    onMouseLeave={handleIconMouseLeave}
                                >
                                    <img
                                        src={icon}
                                        alt={`${id}Icon`}
                                        width={120}
                                        style={{ transform: hoveredIcon === id ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                </IconWrapper>
                            </Stack>
                            <Stack marginTop={2}>
                                <ProgressWrapper visible={hoveredIcon === id}>
                                    <BorderLinearProgress variant="determinate" value={progress} />
                                    <Typography alignSelf="center" color="#42a96d">
                                        {`${progress}%`}
                                    </Typography>
                                </ProgressWrapper>
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Grid>
    );
}

export default Skills;