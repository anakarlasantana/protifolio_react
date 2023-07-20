import { Typography, Stack, Button } from '@mui/material';
import logo from '../../src/assets/logo.svg';



const simbolHead = () => {
  return (
    <Typography color={'#42a96d'}>#</Typography>
  );

};


function Header() {
  return (
    <Stack spacing={70} width={'70vw'} height={'5rem'} marginLeft={'15vw'} direction={'row'} >
      <Stack direction={'row'} alignSelf={'end'}>
        <img src={logo} alt="" width={30} height={30} />
        <Typography width={'20rem'}  color={'white'} alignSelf={'end'} fontFamily={ 'Fira Code'}>
          Ana Karla
        </Typography>
      </Stack>

      <Stack direction={'row'} alignSelf={'end'} spacing={2} width={'25rem'}>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} home </Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} works</Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} about-me</Button>
        <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }} color="primary">{simbolHead()} constacts</Button>
      </Stack>
    </Stack>
  );
}

export default Header;
