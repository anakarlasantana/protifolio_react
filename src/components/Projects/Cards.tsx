import { AddLink } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography, useMediaQuery } from "@mui/material";

interface CardsProps {
    illustration: string | null,
    title: string | null,
    description: string | null,
    link: string | null,
    linkTitle: string | null,
};

export default function Cards({ illustration, title, description, link, linkTitle }: CardsProps) {

    const isMobileScreen = useMediaQuery('(max-width: 540px)');


    const customButton = {
        border: '1px solid #42a96d',
        borderRadius: '0',
        fontFamily: 'Fira Code',
        textTransform: 'none',
    }

    const customCardProject = {
        border: '1px solid #ABB2BF',
        borderRadius: '0',
        maxWidth: "300px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
        "&:hover": {
            transform: "scale(1.05)",
            zIndex: 10,
            boxShadow: 5,
        }
    }

    return (
        <Card sx={customCardProject}>
            <CardActionArea >
                {illustration ? (
                    <CardMedia
                        component="img"
                        src={illustration}
                        alt="foto"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                ) : null}
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" color={'white'} fontFamily={'Fira Code'}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="#ABB2BF" fontSize={'15px'} fontFamily={'Fira Code'}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                {/* {link && (
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
                            <Typography sx={{ fontFamily: 'Fira Code' }}>{linkTitle}</Typography>
                            <AddLink fontSize="small" />
                        </Stack>
                    </Button>
                )} */}
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
                        {linkTitle}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}