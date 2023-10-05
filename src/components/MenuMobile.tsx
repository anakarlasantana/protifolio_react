import { Button, IconButton, List, ListItem, ListItemText, Stack, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import logo from '../../src/assets/logo.png';
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linkedingIcon from '../../src/assets/linkedinIcon.svg';
import { Link as ScrollLink } from "react-scroll";
import { LanguageSwitcher } from "./languageSwither";

const simbolHead = () => {
    return <Typography color="#42a96d">#</Typography>;
};


const MenuMobile: React.FC = () => {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [openMenu, setOpenMenu] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const toggleDrawer =
        (anchor: Anchor) =>
            (event: React.MouseEvent) => {
                if (anchor === 'left') {
                    setOpenMenu(!openMenu);
                }
            };


    const itemText = {
        color: 'white'
    }

    return (
        <Stack>
            <IconButton
                color="secondary"
                onClick={handleClick}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ margin: '10px' }}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor={'top'}
                open={openMenu}
                onClose={toggleDrawer('left')}
                onOpen={toggleDrawer('left')}

            >
                <List sx={{ backgroundColor: 'primary', width: 'auto' }} >
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Stack direction={'row'} justifyContent={'space-between'} width={'98%'} alignItems={'center'}>
                            <Stack paddingLeft={2}>
                                <img src={logo} alt="" width={18} height={18} />
                            </Stack>
                            <IconButton onClick={handleClose} style={itemText}>
                                <Close fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Stack>
                        <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
                            <ListItem button onClick={handleClose}>
                                {simbolHead()}
                                <ListItemText primary="home" style={itemText} />
                            </ListItem>
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                            <ListItem button onClick={handleClose}>
                                {simbolHead()}
                                <ListItemText primary="projects" style={itemText} />
                            </ListItem>
                        </ScrollLink>
                        <ScrollLink to="aboutMe" smooth={true} duration={500}>
                            <ListItem button onClick={handleClose}>
                                {simbolHead()}
                                <ListItemText primary="about me" style={itemText} />
                            </ListItem>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <ListItem button onClick={handleClose}>
                                {simbolHead()}
                                <ListItemText primary="contact" style={itemText} />
                            </ListItem>
                        </ScrollLink>
                        <LanguageSwitcher/>
                        <Stack direction={'row'} alignSelf={'center'}>
                            <IconButton href=" https://github.com/anakarlasantana"><img src={githubIcon} alt="" /></IconButton>
                            <IconButton href="mailto:anakarla.p.santana@gmail.com"><img src={emailIcon} alt="" /></IconButton>
                            <IconButton href="https://www.linkedin.com/in/anakarlasantana/"><img src={linkedingIcon} alt="" /></IconButton>
                        </Stack>
                    </Stack>


                </List>
            </SwipeableDrawer>
        </Stack>
    );
};

export default MenuMobile;
