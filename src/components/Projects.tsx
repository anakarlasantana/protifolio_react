import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import cloneNetflix from "../assets/cloneNetflix.png"
import pin from "../assets/pin+.png"
import AddLinkIcon from '@mui/icons-material/AddLink';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ExpandMore } from '@mui/icons-material';

const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function Projects() {
    const [isHoveredItems, setIsHoveredItems] = useState([false, false, false]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const customButton = {
        border: '1px solid #42a96d',
        borderRadius: '0',
        fontFamily: 'Fira Code',
        textTransform: 'none',
    }

    const customCardProject = {
        border: '1px solid #ABB2BF',
        borderRadius: '0',
        maxWidth: 390,
        transition: 'transform 0.3s ease-out',
    }

    const handleMouseToggle = (index: number, isHovering: boolean) => {
        const updatedHoveredItems = [...isHoveredItems];
        updatedHoveredItems[index] = isHovering;
        if (isHovering) {
            for (let i = 0; i < updatedHoveredItems.length; i++) {
                if (i !== index) {
                    updatedHoveredItems[i] = false;
                }
            }
        }
        setIsHoveredItems(updatedHoveredItems);
    };

    return (
        <Grid container width={'100%'}>
            <Stack spacing={2} direction={'row'} style={{ alignItems: 'center', marginLeft: '15vw',}}>
                {simbolHead()}
                <Typography sx={{ fontFamily: 'Fira Code', fontSize: '32px', textTransform: 'none', color: 'white' }}>projects</Typography>
                <Stack>
                    <Divider sx={{backgroundColor: '#42a96d', width: '40rem' }} />
                </Stack>
                <Stack paddingLeft={'16rem'}>
                    <Button variant="text" onClick={() => setShowMoreProjects(!showMoreProjects)}>
                        {showMoreProjects ? (
                            <Typography sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', paddingRight: '0.5rem' }}>
                                Recolher
                            </Typography>
                        ) : (
                            <Typography sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d', paddingRight: '0.5rem' }}>
                                More project
                            </Typography>
                        )}
                        <IconButton>
                            <ExpandMore color="success" />
                        </IconButton>
                    </Button>
                </Stack>
            </Stack>
            <Grid container width={'100%'} style={{ display: 'flex', paddingTop: '50px', marginLeft: '15vw', justifyContent: 'center', padding: '30px', maxWidth: '84rem' }}>
                {showMoreProjects ? renderAdditionalProjects() : null}
                {renderProjectCard("Clone Netflix", "Esse foi o meu primeiro projeto, que consiste na clonagem da página principa da Netflix usando somente JavaScript, HTML e CSS.", "https://netflix-clone-9l2uyq3sv-anakarlasantana.vercel.app/#", null, 1)}
                {renderProjectCard("Projeto pin+", "O pin+ é um projeto que apoia a construção da cultura organizacional, através de feedbacks, incentivos, interatividade e ranking colaborativos.", "https://pinmais2-web-homo.azurewebsites.net/#/", "https://grupoportfolio.com.br/portfolio-tech/pin-mais/", 2)}
                {renderProjectCard("API REST", "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.", null, null, 3)}
            </Grid>
        </Grid>
    );

    function renderProjectCard(title: string | null, description: string | null, link: string | null, additionalLink: string | null, index: number) {
        return (
            <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: '30px' }} >
                <Card sx={{ ...customCardProject, transform: isHoveredItems[index] ? 'scale(1.1)' : 'scale(1)' }}
                    onMouseEnter={() => handleMouseToggle(index, true)}
                    onMouseLeave={() => handleMouseToggle(index, false)}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={title === "Clone Netflix" ? cloneNetflix : pin}
                            alt="foto"
                        />
                        <CardContent sx={customCardProject}>
                            <Typography gutterBottom variant="h5" component="div" color={'white'}>
                                {title}
                            </Typography>
                            <Typography variant="body2" color="white">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {link && (
                            <Button
                                variant="contained"
                                sx={customButton}
                                color="primary"
                                href={link}
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Stack direction="row" spacing={1} alignItems="center" >
                                    <Typography sx={{ fontFamily: 'Fira Code' }}>Link</Typography>
                                    <AddLinkIcon fontSize="small" />
                                </Stack>
                            </Button>
                        )}
                        {additionalLink && (
                            <Button
                                variant="contained"
                                sx={customButton}
                                color="primary"
                                href={additionalLink}
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Saiba Mais
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Grid>
        );
    }

    function renderAdditionalProjects() {
        return (
            <>
                {renderProjectCard("Clone Netflix", "Esse foi o meu primeiro projeto, que consiste na clonagem da página principa da Netflix usando somente JavaScript, HTML e CSS.", "https://netflix-clone-9l2uyq3sv-anakarlasantana.vercel.app/#", null, 4)}
                {renderProjectCard("Projeto pin+", "O pin+ é um projeto que apoia a construção da cultura organizacional, através de feedbacks, incentivos, interatividade e ranking colaborativos.", "https://pinmais2-web-homo.azurewebsites.net/#/", "https://grupoportfolio.com.br/portfolio-tech/pin-mais/", 5)}
                {renderProjectCard("API REST", "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.", null, null, 6)}
            </>
        );
    }
}

export default Projects;
