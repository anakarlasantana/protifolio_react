import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";



const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function Projects() {

    const [isHoveredItemOne, setIsHoveredItemOne] = useState(false);
    const [isHoveredItemTwo, setIsHoveredItemTwo] = useState(false);
    const [isHoveredItemTree, setIsHoveredItemTree] = useState(false);

    const handleMouseEnter = () => {
        setIsHoveredItemOne(true);
        setIsHoveredItemTwo(true);
        setIsHoveredItemTree(true);
    };

    const handleMouseLeave = () => {
        setIsHoveredItemOne(false);
        setIsHoveredItemTwo(false);
        setIsHoveredItemTree(false);
    };

    const customButton = {
        border: '1px solid #42a96d',
        borderRadius: '0',
        fontFamily: 'Fira Code',
        textTransform: 'none',
    }

    const customCardProject = {
        border: '1px solid #ABB2BF',
        borderRadius: '0',
        maxWidth: 400,
        transition: 'transform 0.3s ease',
    }




    return (
        <Grid>
            <Stack spacing={1} direction={'row'} style={{ display: 'flex', alignItems: 'center', border: '1px solid black', marginLeft: '15vw' }}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>projects</Typography>
                <Stack>
                    <Divider sx={{ display: 'flex', backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
                <Stack paddingLeft={'23.7rem'}>
                    <Button sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }}>View all ~~{">"}</Button>
                </Stack>
            </Stack>
            <Grid container style={{ display: 'flex', border: '1px solid black', paddingTop: '50px', marginLeft: '15vw', justifyContent: 'center', padding: '30px' }}>
                <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: '10px' }} >
                    <Card sx={{ ...customCardProject, transform: isHoveredItemOne ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setIsHoveredItemOne(true)} onMouseLeave={() => setIsHoveredItemOne(false)}>
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                                alt="foto"
                            />
                            <CardContent sx={customCardProject}>
                                <Typography gutterBottom variant="h5" component="div" >
                                    Lizard 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" sx={customButton} color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: '10px' }}>
                    <Card sx={{ ...customCardProject, transform: isHoveredItemTwo ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setIsHoveredItemTwo(true)} onMouseLeave={() => setIsHoveredItemTwo(false)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                                alt="foto"
                            />
                            <CardContent sx={customCardProject}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" sx={customButton} color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}  >
                    <Card sx={{ ...customCardProject, transform: isHoveredItemTree ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setIsHoveredItemTree(true)} onMouseLeave={() => setIsHoveredItemTree(false)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                                alt="foto"
                            />
                            <CardContent sx={customCardProject}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" sx={customButton} color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>



        </Grid>
    );
}

export default Projects;
