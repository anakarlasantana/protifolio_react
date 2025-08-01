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


    const customCardProject = {
        border: '1px solid text.secondary',
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
                    <Typography gutterBottom variant="h5" component="div" color={'text.secondary'} fontFamily={'Fira Code'}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.disabled" fontSize={'15px'} fontFamily={'Fira Code'}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                {link && (
                    <Button
                        variant="contained"
                        color="primary"
                        href={link}
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontFamily: 'Fira Code',
                            textTransform: 'none',
                            color: '#42a96d',
                            border: '1px solid #42a96d',
                            borderRadius: '4px',
                            backgroundColor: 'transparent',
                            px: 2,
                            '&:hover': {
                                backgroundColor: '#42a96d22',
                            },
                        }}
                    >
                        {linkTitle}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}