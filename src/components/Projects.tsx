import { Divider, Stack, Typography } from "@mui/material";

const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function Projects() {
    return (
        <Stack spacing={1} direction={'row'} style={{ display: 'flex', alignItems: 'center', border: '1px solid black', marginLeft: '15vw'}}>
            {simbolHead()}
            <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }} color="primary">projects</Typography>
            <Stack>
            <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
            </Stack>
        </Stack>
    );
}

export default Projects;
