import React from 'react';
import {
  Chip,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Stack,
} from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import './ExperienceAndEducation.css';
import { CalendarMonth, Tag } from '@mui/icons-material';
import reactIcon from "../../assets/reactIcon.png";
import javascriptIcon from '../../assets/javascript.svg';
import typescriptIcon from '../../assets/typescript.svg';
import nodejsIcon from '../../assets/nodeIcon.png';
import muiIcon from '../../assets/materialMuiIcon.png';
import gitIcon from '../../assets/gitIcon.png';
import jiraIcon from '../../assets/jiraIcon.svg';
import sqlIcon from '../../assets/sqlite.svg';
import javaIcon from '../../assets/javaIcon.png';
import python from '../../assets/python.svg';
import azure from '../../assets/azure.svg';
import azure_stored from '../../assets/microsoft-azure-storage.svg';
import django from '../../assets/django.svg';
import mysql from '../../assets/mysql.svg';
import postgreSql from '../../assets/postgresqlIcon.svg'
import { useTranslation } from 'react-i18next';
import SectionDivider from '../SectionDivider';
import ExperienceCard from './ExperienceCard';


export default function ExperienceAndEducation() {

  const isMobileScreen = useMediaQuery('(max-width: 540px)');
  const { t } = useTranslation();


  return (
    <Grid container width={'100%'}>
      <Stack width={'100%'}>
        <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"title_expe"} />
        <VerticalTimeline className="custom-timeline">
          <ExperienceCard
            title={t("card_one_title")}
            company="Grupo Portfólio"
            date={t("card_one_date")}
            description={t("card_one_description")}
            skills={[
              { icon: javascriptIcon, alt: 'Javascript', label: 'Javascript' },
              { icon: reactIcon, alt: 'React', label: 'React' },
              { icon: typescriptIcon, alt: 'Typescript', label: 'Typescript' },
              { icon: nodejsIcon, alt: 'Node.js', label: 'Node.js' },
              { icon: muiIcon, alt: 'Material MUI', label: 'Material MUI' },
              { icon: gitIcon, alt: 'Git', label: 'Git' },
              { icon: jiraIcon, alt: 'Jira', label: 'Jira' },
              { icon: python, alt: 'Python', label: 'Python' },
              { icon: django, alt: 'Django', label: 'Django' },
              { icon: postgreSql, alt: 'postgreSql', label: 'PostgreSQL' },
              { icon: mysql, alt: 'mysql', label: 'MySql' },
              { icon: azure, alt: 'Azure', label: 'Azure' },
              { icon: azure_stored, alt: 'Azure-Stored', label: 'Azure Stored' },

            ]}
            link="https://www.linkedin.com/in/anakarlasantana/"
            showCustomLink={true}
          />
          <ExperienceCard
            title={t("card_two_title")}
            company="Uniasselvi"
            date={t("card_two_date")}
            description={t("card_two_description")}
            skills={[]}
            link="https://www.linkedin.com/in/anakarlasantana/"
            showCustomLink={false}
          />
          <ExperienceCard
            title="Rocketseat"
            company="Online Course platforms"
            date="2022 - 2023"
            description={t("card_tree_description")}
            skills={[
              { icon: javascriptIcon, alt: 'Javascript', label: 'Javascript' },
              { icon: reactIcon, alt: 'React', label: 'React' },
              { icon: typescriptIcon, alt: 'Typescript', label: 'Typescript' },
              { icon: nodejsIcon, alt: 'Node.js', label: 'Node.js' },
              { icon: sqlIcon, alt: 'SQLite', label: 'SQLite' },
              { icon: gitIcon, alt: 'Git', label: 'Git' },
            ]}
            link="https://www.linkedin.com/in/anakarlasantana/"
            showCustomLink={false}

          />
          <ExperienceCard
            title={t("card_four_title")}
            company={t("card_four_colege")}
            date="2021 - 2021"
            description={t("card_four_description")}
            skills={[
              { icon: javaIcon, alt: 'Java', label: 'Java' },
              { icon: python, alt: 'Python', label: 'Python' },
            ]}
            link="https://www.linkedin.com/in/anakarlasantana/"
            showCustomLink={false}
          />
        </VerticalTimeline>
      </Stack>
    </Grid>
  );
}
