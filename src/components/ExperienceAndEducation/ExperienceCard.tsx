import { useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Chip,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import {
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CalendarMonth, School, Tag, Work } from '@mui/icons-material';


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
  type: 'work' | 'education';
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  company,
  date,
  description,
  skills,
  link,
  showCustomLink,
  type
}) => {

  const isMobileScreen = useMediaQuery('(max-width: 540px)');
  const { t } = useTranslation();
  const theme = useTheme();

  const CustomLink = () => (
    <Stack direction="row" spacing={1} mb={2} alignItems="center">
      <Stack direction="row" flexWrap="wrap" spacing={1}>
        <a href="https://grupoportfolio.com.br/portfolio-tech/pin-mais/" target="_blank" rel="noopener noreferrer" style={{ color: '#42a96d' }}>
          Pin+,
        </a>
        <a href="https://hairclubbrasil.com.br/" target="_blank" rel="noopener noreferrer" style={{ color: '#42a96d' }}>
          HairClub,
        </a>
        <span style={{ color: '#42a96d' }}>Cronos, Phoenix Service, Mobit...</span>
      </Stack>
    </Stack>


  );

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: theme.palette.background.paper,
        color: '#ABB2BF',
        border: '1px solid #42a96d',
        borderBottom: `1px solid ${theme.palette.divider}`,

      }}
      icon={
        type === 'education'
          ? <School sx={{ fontSize: 18, color: '#ffffff' }} />
          : <Work sx={{ fontSize: 18, color: '#ffffff' }} />
      }
      contentArrowStyle={{
        borderRight: `7px solid ${theme.palette.secondary.main}`,
      }}

      iconStyle={{
        background: '#42a96d',
      }}
    >
      <Stack
        direction={isMobileScreen ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobileScreen ? 'flex-start' : 'center'}
      >
        <Stack direction="row" spacing={1} alignItems="center" >
          <Tag sx={{ color: '#42a96d' }} />
          <Stack spacing={0.3}>
            <Typography
              variant="h6"
              fontFamily="Fira Code"
              color={theme.palette.text.secondary}
              fontWeight={600}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              fontFamily="Fira Code"
              color="#ccc"
            >
              {company}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent={"end"}>
          <CalendarMonth sx={{ color: '#42a96d' }} fontSize="small" />
          <Typography fontSize={14} fontFamily="Fira Code" color="#ccc">
            {date}
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          variant="body2"
          fontFamily="Fira Code"
          color="#ABB2BF"
          sx={{ mb: 2 }}
        >
          {description}
        </Typography>
      </Stack>
      <Stack direction={'row'}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {showCustomLink && <CustomLink />}
        </div>
      </Stack>
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={1}
        sx={{ mb: 2, pt: 2 }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            icon={<img src={skill.icon} alt={skill.alt} width={18} />}
            label={skill.label}
            sx={{
              color: '#42a96d',
              backgroundColor: '#1e1e1e',
              border: '1px solid #42a96d',
              fontFamily: 'Fira Code',
              height: '32px',
            }}
          />
        ))}
      </Stack>


      <Stack alignItems="flex-end">
        <Button
          sx={{
            fontFamily: 'Fira Code',
            textTransform: 'none',
            color: '#42a96d',
            border: '1px solid #42a96d',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            px: 2,
            '&:hover': {
              backgroundColor: '#42a96d22',
            },
          }}
          href={link}
          target="_blank"
          variant="outlined"
          size="small"
        >
          {t("card_button")}
        </Button>
      </Stack>

    </VerticalTimelineElement>
  );
};

export default ExperienceCard;