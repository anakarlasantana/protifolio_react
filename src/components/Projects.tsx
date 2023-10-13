import React, { useState } from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery
} from "@mui/material";
import login from "../assets/login.png";
import socialLayout from "../assets/social_layout.png";
import apiRestNodeJS from "../assets/api_rest_node.png";
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useTranslation } from 'react-i18next';


const simbolHead = () => {
    return (
        <Typography color={'#42a96d'} fontSize={'32px'}>#</Typography>
    );
};

function Projects() {
    const [isHoveredItems, setIsHoveredItems] = useState([false, false, false]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const isMobileScreen = useMediaQuery('(max-width: 540px)');

    const { t } = useTranslation();

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
            <Stack direction={'row'} spacing={2}  width={'100%'} style={{ alignItems: 'center', marginLeft: '15vw', }}>
                {simbolHead()}
                <Typography fontSize={isMobileScreen ? 20 : 32} sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: 'white' }}>{t("project_title")}</Typography>
                <Stack width={'50%'}>
                    <Divider sx={{ backgroundColor: '#42a96d' }} />
                </Stack>
                {/* <Stack>
                    <Button size='small' onClick={() => setShowMoreProjects(!showMoreProjects)}>
                        {showMoreProjects ? (
                            <Typography sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d'}}>
                                Retract
                            </Typography>
                        ) : (
                            <Typography sx={{ fontFamily: 'Fira Code', textTransform: 'none', color: '#42a96d'}}>
                                More project
                            </Typography>
                        )}
                        <IconButton>
                            {showMoreProjects ? (<ExpandLess color="success" />) : (<ExpandMore color="success" />)}

                        </IconButton>
                    </Button>
                </Stack> */}
            </Stack>

            <Grid container width={'100%'} justifyContent={'center'}>
                <Grid>
                    {renderProjectCard(login, "Login and API REST", t("project_card_one_description"), "https://send-email-react-js.vercel.app/", "https://github.com/anakarlasantana/send_email_reactJs", 3)}
                </Grid>
                <Grid >
                    {renderProjectCard(socialLayout, t("project_card_two_title"), t("project_card_two_description"), null, "https://github.com/anakarlasantana/social_layout", 1)}
                </Grid>
                <Grid >
                    {renderProjectCard(apiRestNodeJS, t("project_card_tree_title"), t("project_card_tree_description"), null, "https://github.com/anakarlasantana/Api_rest_nodeJS_Typescript", 5)}
                </Grid>
                {showMoreProjects ? renderAdditionalProjects() : null}
            </Grid>
        </Grid>
    );

    function renderProjectCard(illustration: string | null, title: string | null, description: string | null, link: string | null, additionalLink: string | null, index: number) {
        return (
            <Grid sx={{ margin: '15px' }}>
                <Card sx={{ ...customCardProject, transform: isHoveredItems[index] ? 'scale(1.1)' : 'scale(1)' }}
                    onMouseEnter={() => handleMouseToggle(index, true)}
                    onMouseLeave={() => handleMouseToggle(index, false)}
                >
                    <CardActionArea>
                        {illustration ? (
                            <CardMedia
                                component="img"
                                height="140"
                                image={illustration}
                                alt="foto"
                            />
                        ) : null}
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
                                    <Typography sx={{ fontFamily: 'Fira Code' }}> {t("project_btton_link")}</Typography>
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
                                {t("project_btton")}
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
                { }
            </>
        );
    }
}

export default Projects;
