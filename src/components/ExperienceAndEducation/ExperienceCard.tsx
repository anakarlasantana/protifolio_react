import { useMediaQuery } from "@mui/material";
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
import { CalendarMonth, Tag } from '@mui/icons-material';


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
    <Stack direction={"row"}>
      <Typography style={{ fontSize: '13px', fontFamily: 'Fira Code', paddingRight: "10px" }}>
        {t("card_product_title")}
      </Typography>
      <Typography style={{ fontSize: '13px', fontFamily: 'Fira Code' }}>
        <a href="https://grupoportfolio.com.br/portfolio-tech/pin-mais/" target="_blank" style={{ marginRight: "10px" }}>
          Pin+,
        </a>
        <a href="https://hairclubbrasil.com.br/" target="_blank" style={{ marginRight: "10px" }}>
          HairClub,
        </a>
        <span style={{ marginRight: "10px" }}>Cronos,</span>
        <span style={{ marginRight: "10px" }}>Phoenix Service,</span>
        <span style={{ marginRight: "10px" }}>Site Institucional Portfólio,</span>
        <span>Mobit</span>
      </Typography>
    </Stack>


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
          {showCustomLink && <CustomLink />}
        </div>
      </Stack>
      <Stack direction={'row'} flexWrap={'wrap'} paddingLeft={'20px'} marginTop={'5px'} fontFamily={'Fira Code'}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            variant="filled"
            size='medium'
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

export default ExperienceCard;