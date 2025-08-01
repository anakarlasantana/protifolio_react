import React from "react";
import { Stack} from "@mui/material";
import gitIcon from '../../assets/gitIcon.png';
import javascriptIcon from '../../assets/javascript.svg';
import reactIcon from '../../assets/reactIcon.png';
import nodeIcon from '../../assets/nodeIcon.png';
import postgresql from '../../assets/postgresqlIcon.svg';
import typescriptIcon from '../../assets/typescript.svg';
import muiIcon from '../../assets/materialMuiIcon.png';
import figmaIcon from '../../assets/figma.svg';
import jiraIcon from '../../assets/jiraIcon.svg';
import mongoDBIcon from '../../assets/mongodb.svg';
import sqlIteIcon from '../../assets/sqlite.svg';
import bootstrap from '../../assets/bootstrapIcon.svg';
import trelloIcon from '../../assets/trelloIcon.svg';
import mySQL from '../../assets/mysql.svg';
import django from '../../assets/django.svg';
import python from '../../assets/python.svg';
import azure from '../../assets/azure.svg';
import azureStored from '../../assets/microsoft-azure-storage.svg'
import { Tag } from "@mui/icons-material";
import SectionDivider from "../SectionDivider";
import AutoPlayCarousel from "./Carousel";



function Skills() {

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


    return (
        <Stack>
            <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"skills_title"} />
            <Stack >
                <AutoPlayCarousel items={iconData} />
            </Stack>
        </Stack>
    );
}

export default Skills;