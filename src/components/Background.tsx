import Stack from "@mui/material/Stack";
import dots from '../assets/elementDots.svg';
import logoTwo from '../assets/logoTwo.svg';
import squareLeft from '../assets/squareLeft.svg';
import square from '../assets/square.svg';
import squareRight from '../assets/squareRight.svg';
import { useMediaQuery } from "@mui/material";

export default function Background() {

  const isSmallScreen = useMediaQuery('(max-width: 1050px)');


  return (
    <Stack>
      {
        isSmallScreen ? "none" : <Stack>
        <img src={square} style={{ width: '3rem', height: '4rem', position: 'absolute', top: '12rem', left: '2rem' }} />
        <img src={squareLeft} style={{ width: '4rem', height: '8rem', position: 'absolute', top: '6rem' }} />
      </Stack>
      }
      <img src={squareLeft} style={{ width: '4rem', height: '7rem', position: 'absolute', top: '100rem' }} />
      <img src={dots} style={{ width: '5rem', height: '5rem', position: 'absolute', top: '140rem', left: '5rem' }} />
      <img src={dots} style={{ width: '3rem', height: '3rem', position: 'absolute', top: '135rem', left: '10rem' }} />
      <img src={square} style={{ width: '4rem', height: '4rem', position: 'absolute', top: '73rem', right: '0.1px' }} />
      <img src={squareRight} style={{ width: '10rem', height: '8rem', position: 'absolute', top: '75rem', right: '1rem' }} />
      <img src={dots} style={{ width: '5rem', height: '4rem', position: 'absolute', top: '2rem', right: '0.1px' }} />
    </Stack>
  )
}