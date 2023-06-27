import { Typography, Stack, Button } from '@mui/material';
import logo from '../../src/assets/logo.svg';



const simbolHead = () => {
  return (
    <Typography color={'#42a96d'}>#</Typography>
  );

};


function Header() {
  return (
    <Stack spacing={2} width={'70vw'} height={'5rem'} marginLeft={'15vw'} direction={'row'} >
      <Typography width={'60rem'} alignSelf={'end'} color={'white'}>
        <img src={logo} alt="" width={15} height={15}/>
        Ana Karla
      </Typography>
      <Stack direction={'row'} alignSelf={'end'} spacing={2} width={'30rem'}>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} home </Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} works</Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} about-me</Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} constacts</Button>
      </Stack>
    </Stack>
  );
}

export default Header;
