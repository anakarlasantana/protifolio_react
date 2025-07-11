import React from "react";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import gitIcon from '../assets/gitIcon.png';
import javascriptIcon from '../assets/javascript.svg';
import reactIcon from '../assets/reactIcon.png';
import nodeIcon from '../assets/nodeIcon.png';
import postgresql from '../assets/postgresqlIcon.svg';
import typescriptIcon from '../assets/typescript.svg';
import muiIcon from '../assets/materialMuiIcon.png';
import figmaIcon from '../assets/figma.svg';
import jiraIcon from '../assets/jiraIcon.svg';
import mongoDBIcon from '../assets/mongodb.svg';
import sqlIteIcon from '../assets/sqlite.svg';
import bootstrap from '../assets/bootstrapIcon.svg';
import trelloIcon from '../assets/trelloIcon.svg';
import mySQL from '../assets/mysql.svg';
import django from '../assets/django.svg';
import python from '../assets/python.svg';
import azure from '../assets/azure.svg';
import azureStored from '../assets/microsoft-azure-storage.svg'
import { Tag } from "@mui/icons-material";
import SectionDivider from "./SectionDivider";



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
        {
            id: 'mySql',
            icon: mySQL,
            name: 'mySQL',
        },
        {
            id: 'python',
            icon: python,
            name: 'Python',
        },
        {
            id: 'django',
            icon: django,
            name: 'Django',
        },
        {
            id: 'azure',
            icon: azure,
            name: 'Azure',
        },
        {
            id: 'azure_stored',
            icon: azureStored,
            name: 'Azure Stored',
        },
    ];


    const handleIconMouseEnter = (id: string) => {
        setHoveredIcon(id);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon('');
    };

    const isMobileScreen = useMediaQuery('(max-width: 540px)');

    return (
        <Stack>
            <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"skills_title"} />
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} paddingTop={'2vw'} alignItems={'center'} >
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
                            <Stack marginTop={5} height={20}>
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
        </Stack>
    );
}

export default Skills;