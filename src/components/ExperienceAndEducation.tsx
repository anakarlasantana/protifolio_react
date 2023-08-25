import * as React from 'react';
import { Box, Chip, Grid, Icon, Typography, Button, Divider } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css'; // Importe primeiro o estilo padrão
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './ExperienceAndEducation.css'
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










const simbolHead = () => {
  return (
    <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
  );

};


export default function ExperienceAndEducation() {
  return (
    <Grid container width={'100%'}>
      <Stack width={'100%'}>
        <Stack spacing={2} direction={'row'} marginLeft={'15vw'}>
          {simbolHead()}
          <Typography
            sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}
          >
            experiência e educação
          </Typography>
        </Stack>
        <VerticalTimeline className="custom-timeline">
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
              width: '30px',
              height: '30px',
              marginLeft: '-15px'
            }}
          >
            <Stack direction={'row'} spacing={10} fontFamily={'Fira Code'}>
              <Stack direction="row" alignItems="center">
                <Tag style={{ color: '#42a96d' }} />
                <Stack paddingTop={'20px'}>
                  <h3 color={'white'} className="vertical-timeline-element-title">FullStack Developer</h3>
                  <h5 className="vertical-timeline-element-subtitle">Grupo Portfólio</h5>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonth style={{ color: '#42a96d' }} />
                <Typography style={{ fontSize: '12px' }} fontFamily={'Fira Code'}>2022 - presente</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} fontSize={'10px'}>
              <Typography style={{ fontSize: '13px' }} fontFamily={'Fira Code'} paddingLeft={'20px'}>Atuo no projeto pin+.</Typography>
            </Stack>
            <Stack direction={'row'} flexWrap={'wrap'} paddingLeft={'20px'} marginTop={'5px'} fontFamily={'Fira Code'}>
              <Chip variant="filled" icon={<img src={javascriptIcon} alt="React Icon" width={15} />} label="Javascript" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={reactIcon} alt="React Icon" width={15} />} label="React" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={typescriptIcon} alt="React Icon" width={15} />} label="Typescript" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={nodejsIcon} alt="React Icon" width={15} />} label="Node js" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={muiIcon} alt="React Icon" width={15} />} label="Material MUI" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={gitIcon} alt="React Icon" width={15} />} label="Git" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={jiraIcon} alt="React Icon" width={15} />} label="Jira" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
            </Stack>
            <Stack alignItems={'end'}>
              <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', width: '100px', border: '1px solid #42a96d', borderRadius: '0' }}
                variant="contained"
                size='small'>Ver mais</Button>
            </Stack>
          </VerticalTimelineElement>
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
              marginLeft: '-10px'
            }}
          >
            <Stack direction={'row'} spacing={7} fontFamily={'Fira Code'}>
              <Stack direction="row">
                <Tag style={{ color: '#42a96d' }} />
                <Stack>
                  <h3 color={'white'} className="vertical-timeline-element-title">Analise e Desenvolvimento de Sistemas</h3>
                  <h5 className="vertical-timeline-element-subtitle">Uniasselvi</h5>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonth style={{ color: '#42a96d' }} />
                <Typography style={{ fontSize: '12px' }} fontFamily={'Fira Code'}>2022 - presente</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} fontSize={'10px'}>
              <Typography style={{ fontSize: '13px' }} fontFamily={'Fira Code'} paddingLeft={'20px'}>Graduação no curso superior em analise e desenvolvimento de sistemas. </Typography>
            </Stack>
            <Stack alignItems={'end'}>
              <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', width: '100px', border: '1px solid #42a96d', borderRadius: '0' }}
                variant="contained"
                size='small'>Ver mais</Button>
            </Stack>
          </VerticalTimelineElement>
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
              marginLeft: '-10px'
            }}
          >
            <Stack direction={'row'} spacing={7} fontFamily={'Fira Code'}>
              <Stack direction="row">
                <Tag style={{ color: '#42a96d' }} />
                <Stack>
                  <h3 color={'white'} className="vertical-timeline-element-title">Rocketseat</h3>
                  <h5 className="vertical-timeline-element-subtitle">Online Course platforms</h5>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonth style={{ color: '#42a96d' }} />
                <Typography style={{ fontSize: '12px' }} fontFamily={'Fira Code'}>2022 - 2023</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} fontSize={'10px'}>
              <Typography style={{ fontSize: '13px' }} fontFamily={'Fira Code'} paddingLeft={'20px'}>Plataforma de educação em tecnologia mais modernas de desenvolvimento web e mobile.</Typography>
            </Stack>
            <Stack direction={'row'} flexWrap={'wrap'} paddingLeft={'20px'} marginTop={'5px'} fontFamily={'Fira Code'}>
              <Chip variant="filled" icon={<img src={javascriptIcon} alt="React Icon" width={15} />} label="Javascript" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={reactIcon} alt="React Icon" width={15} />} label="React" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={typescriptIcon} alt="React Icon" width={15} />} label="Typescript" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={nodejsIcon} alt="React Icon" width={15} />} label="Node js" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={sqlIcon} alt="React Icon" width={15} />} label="SqLite" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={gitIcon} alt="React Icon" width={15} />} label="Git" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
            </Stack>
            <Stack alignItems={'end'}>
              <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', width: '100px', border: '1px solid #42a96d', borderRadius: '0' }}
                variant="contained"
                size='small'>Ver mais</Button>
            </Stack>
          </VerticalTimelineElement>
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
              marginLeft: '-10px'
            }}
          >
            <Stack direction={'row'} spacing={7} fontFamily={'Fira Code'}>
              <Stack direction="row">
                <Tag style={{ color: '#42a96d' }} />
                <Stack>
                  <h3 color={'white'} className="vertical-timeline-element-title">Programação de Sistemas</h3>
                  <h5 className="vertical-timeline-element-subtitle">Universidade Estadual do Ceará</h5>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonth style={{ color: '#42a96d' }} />
                <Typography style={{ fontSize: '12px' }} fontFamily={'Fira Code'}>2021 - 2021</Typography>
              </Stack>
            </Stack>
            <Stack direction={'row'} fontSize={'10px'}>
              <Typography style={{ fontSize: '13px' }} fontFamily={'Fira Code'} paddingLeft={'20px'}>Curso Técnico em programação de sistemas. </Typography>
            </Stack>
            <Stack direction={'row'} flexWrap={'wrap'} paddingLeft={'20px'} marginTop={'5px'} fontFamily={'Fira Code'}>
              <Chip variant="filled" icon={<img src={javaIcon} alt="React Icon" width={15} />} label="Java" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
              <Chip variant="filled" icon={<img src={python} alt="React Icon" width={15} />} label="Python" style={{ color: '#42a96d', margin: '2px', fontFamily: 'Fire Code' }} />
            </Stack>
            <Stack alignItems={'end'}>
              <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', width: '100px', border: '1px solid #42a96d', borderRadius: '0' }}
                variant="contained"
                size='small'>Ver mais</Button>
            </Stack>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Stack>
    </Grid>
  );
}
