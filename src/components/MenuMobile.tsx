import { Button, IconButton, List, ListItem, ListItemText, Stack, SwipeableDrawer, Typography } from "@mui/material";
import React, { useState } from "react";
import { Menu as MenuIcon } from '@mui/icons-material';
import logo from '../../src/assets/logo.svg';
import githubIcon from '../../src/assets/github.svg';
import emailIcon from '../../src/assets/emailIcon.svg';
import linkedingIcon from '../../src/assets/linkedinIcon.svg';


const MenuMobile: React.FC = () => {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    // Create separate state variables for each anchor
    const [openMenu, setOpenMenu] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        // Open the drawer for the 'top' anchor when the button is clicked
        setOpenMenu(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // Close the drawer for the 'top' anchor when needed
        setOpenMenu(false);
    };

    const toggleDrawer =
        (anchor: Anchor) =>
            (event: React.MouseEvent) => {
                if (anchor === 'left') {
                    setOpenMenu(!openMenu);
                }
            };

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
                        <Stack direction={'row'} width={'50%'} alignItems={'center'}>
                            <Stack paddingLeft={2}>
                                <img src={logo} alt="" width={30} height={30} />
                            </Stack>
                        </Stack>
                        <Button onClick={handleClose}>X</Button>
                    </Stack>
                    <Stack>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Item 1" />
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Item 2" />
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Item 3" />
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Item 4" />
                        </ListItem>
                        <ListItem button onClick={handleClose}>
                            <ListItemText primary="Tranlate" />
                        </ListItem>
                        <Stack direction={'row'} alignSelf={'center'}>
                            <IconButton href=" https://github.com/anakarlasantana" target="_blank"><img src={githubIcon} alt="" /></IconButton>
                            <IconButton href="mailto:anakarla.p.santana@gmail.com" target="_blank"><img src={emailIcon} alt="" /></IconButton>
                            <IconButton href="https://www.linkedin.com/in/anakarlasantana/" target="_blank"><img src={linkedingIcon} alt="" /></IconButton>
                        </Stack>
                    </Stack>


                </List>
            </SwipeableDrawer>
        </Stack>
    );
};

export default MenuMobile;
