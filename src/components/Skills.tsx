import React from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import gitIcon from '../assets/gitIcon.png';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/reactIcon.png';
import nodeIcon from '../assets/nodeIcon.png';
import javaIcon from '../assets/javaIcon.png';
import postgresql from '../assets/postgresqlIcon.svg';
import typescriptIcon from '../assets/typescript.svg';
import muiIcon from '../assets/materialMuiIcon.png';
import figmaIcon from '../assets/figma.svg';
import jiraIcon from '../assets/jiraIcon.svg';
import mongoDBIcon from '../assets/mongodb.svg';
import sqlIteIcon from '../assets/sqlite.svg';
import bootstrap from '../assets/bootstrapIcon.svg';
import trelloIcon from '../assets/trelloIcon.svg';




const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};


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




function Skills() {
    const [hoveredIcon, setHoveredIcon] = React.useState('');

    const iconData = [
        {
            id: 'git',
            icon: gitIcon,
            name: 'Git',
        },
        {
            id: 'js',
            icon: javascriptIcon,
            name: 'Javascript',
        },
        {
            id: 'react',
            icon: reactIcon,
            name: 'React',
        },
        {
            id: 'node',
            icon: nodeIcon,
            name: 'Node js',
        },
        {
            id: 'typescript',
            icon: typescriptIcon,
            name: 'Typescript',
        },
        {
            id: 'mui',
            icon: muiIcon,
            name: 'Material MUI',
        },
        {
            id: 'figma',
            icon: figmaIcon,
            name: 'Figma',
        },
        {
            id: 'jira',
            icon: jiraIcon,
            name: 'Jira',
        },
        {
            id: 'trello',
            icon: trelloIcon,
            name: 'Trello',
        },
        {
            id: 'bootstrap',
            icon: bootstrap,
            name: 'Bootstrap',
        },
        {
            id: 'postgreSql',
            icon: postgresql,
            name: 'postgreSQL',
        },
        {
            id: 'sqLite',
            icon: sqlIteIcon,
            name: 'SQLite',
        },
        {
            id: 'mongoDb',
            icon: mongoDBIcon,
            name: 'mongoDB',
        },
    ];


    const handleIconMouseEnter = (id: string) => {
        setHoveredIcon(id);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon('');
    };

    return (
        <Grid container width={'100%'} maxWidth={'90%'}>
            <Stack spacing={2} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw'}}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>skills</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
            </Stack>
            <Stack direction={'row'} flexWrap={'wrap'} width={'100%'} justifyContent={'center'} paddingTop={5} maxWidth={'80%'} marginLeft={'10%'}  alignItems={'center'} >
                {iconData.map(({ id, icon, name }) => (
                    <Stack key={id} >
                        <Stack direction="column" paddingBottom={5} paddingLeft={10} alignItems={'center'}>
                            <Stack >
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
                            <Stack marginTop={5}  height={20}>
                                {
                                    hoveredIcon === id ? <Typography color="#42a96d">
                                        {name}
                                    </Typography> : ''
                                }
                            </Stack>
                        </Stack>

                    </Stack>
                ))}
            </Stack>
        </Grid>
    );
}

export default Skills;