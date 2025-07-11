import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import SectionDivider from "./SectionDivider";
import { Tag } from "@mui/icons-material";


function Contact() {

    const isMobileScreen = useMediaQuery('(max-width: 540px)');

    const { t } = useTranslation();


    return (
        <Stack spacing={2}>
            <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"contact_title"} />
            <Stack direction={'row'} spacing={5}>
                <Typography fontFamily={'Fira Code'}
                    color={'#ABB2BF'}
                    style={{
                        textAlign: 'justify',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        textIndent: '2rem',
                    }}>
                    {t("contact_text")}
                </Typography>
            </Stack>
        </Stack>

    );
};

export default Contact;