import React, { useState } from 'react';
import {
  Box,
  Chip,
  Grid,
  Icon,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import './ExperienceAndEducation.css';
import { Stack } from '@mui/joy';
import { CalendarMonth, Tag } from '@mui/icons-material';
import reactIcon from '../assets/reactIcon.png';
import javascriptIcon from '../assets/javascript.svg';
import typescriptIcon from '../assets/typescript.svg';
import nodejsIcon from '../assets/nodeIcon.png';
import muiIcon from '../assets/materialMuiIcon.png';
import gitIcon from '../assets/gitIcon.png';
import jiraIcon from '../assets/jiraIcon.svg';
import sqlIcon from '../assets/sqlite.svg';
import javaIcon from '../assets/javaIcon.png';
import python from '../assets/python.svg';
import { useTranslation } from 'react-i18next';

interface Skill {
  icon: string;
  alt: string;
  label: string;
}

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: Skill[];
  link: string;
  showCustomLink: boolean,
}

const SymbolHead = () => {
  return <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  company,
  date,
  description,
  skills,
  link,
  showCustomLink,
}) => {

  const isMobileScreen = useMediaQuery('(max-width: 540px)');
  const { t } = useTranslation();


  const CustomLink = () => (
    <Typography style={{ fontSize: '13px', fontFamily: 'Fira Code' }}>
      <a href="https://grupoportfolio.com.br/portfolio-tech/pin-mais/" target="_blank">
        pin+
      </a>
      , cronos, Phoenix.
    </Typography>
  );

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#282C33',
        color: '#ABB2BF',
        border: '1px solid #42a96d',
        borderBottom: '1px solid white',
      }}
      contentArrowStyle={{ borderRight: '7px solid white' }}
      iconStyle={{
        background: '#42a96d',
        width: '20px',
        height: '20px',
        marginLeft: '-10px',
      }}
    >
      <Stack direction={isMobileScreen ? 'column' : 'row'} fontFamily={'Fira Code'} justifyContent={'space-between'}>
        <Stack direction="row" alignItems="center">
          <Tag style={{ color: '#42a96d' }} />
          <Stack paddingTop={'20px'} fontSize={'18px'}>
            <h3 color={'white'} className="vertical-timeline-element-title">
              {title}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">{company}</h5>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CalendarMonth fontSize='small' style={{ color: '#42a96d' }} />
          <Typography style={{ fontSize: '15px' }} fontFamily={'Fira Code'}>
            {date}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={'row'}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            style={{ fontSize: '15px' }}
            fontFamily={'Fira Code'}
            paddingLeft={'20px'}
          >
            {description}
          </Typography>
          {showCustomLink && <CustomLink />}
        </div>
      </Stack>
      <Stack direction={'row'} flexWrap={'wrap'} paddingLeft={'20px'} marginTop={'5px'} fontFamily={'Fira Code'}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            variant="filled"
            icon={
              <img src={skill.icon} alt={skill.alt} width={15} />
            }
            label={skill.label}
            style={{
              color: '#42a96d',
              margin: '2px',
              fontFamily: 'Fire Code',
            }}
          />
        ))}
      </Stack>
      <Stack alignItems={'end'} paddingTop={1}>
        <Button
          sx={{
            fontFamily: 'Fira Code',
            textTransform: 'none',
            color: '#42a96d',
            width: '100px',
            border: '1px solid #42a96d',
            borderRadius: '0',
          }}
          href={link}
          target="_blank"
          variant="contained"
          size="small"
        >
          {t("card_button")}
        </Button>
      </Stack>
    </VerticalTimelineElement>
  );
};

export default function ExperienceAndEducation() {

  const isMobileScreen = useMediaQuery('(max-width: 540px)');
  const { t } = useTranslation();


  return (
    <Grid container width={'100%'}>
      <Stack width={'100%'}>
        <Stack spacing={2} direction={'row'} marginLeft={'15vw'}>
          {SymbolHead()}
          <Typography
            sx={{
              fontFamily: 'Fira Code',
              textTransform: 'none',
              color: 'white',
            }}
            fontSize={isMobileScreen ? 20 : 32}
          >
            {t("title_expe")}
          </Typography>
        </Stack>
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
