import {
    Box,
    Grid,
    Stack,
} from "@mui/material";
import login from "../../assets/login.png";
import socialLayout from "../../assets/social_layout.png";
import apiRestNodeJS from "../../assets/api_rest_node.png";
import votingSystem from '../../assets/voting_system.png';
import suncine from '../../assets/suncine.png';
import { useTranslation } from 'react-i18next';
import SectionDivider from '../SectionDivider';
import { Tag } from '@mui/icons-material';
import Cards from './Cards';



function Projects() {
    const { t } = useTranslation();


    return (
        <Grid container width={'100%'}>
            <Stack spacing={2}>
                <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"project_title"} />
                <Box
                    sx={{
                        columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
                        columnGap: "30px",
                    }}
                >
                    <Box sx={{ breakInside: "avoid", mb: 2 }}>
                        <Cards illustration={login} title={t("project_card_one_title")} description={t("project_card_one_description")} link={"https://github.com/anakarlasantana/voting-system"} linkTitle={t("project_btton")} />
                    </Box>
                    <Box sx={{ breakInside: "avoid", mb: 2 }}>
                        <Cards illustration={votingSystem} title={t("project_card_two_title")} description={t("project_card_two_description")} linkTitle={t("project_btton")} link={"https://github.com/anakarlasantana/voting-system"} />
                    </Box>
                    <Box sx={{ breakInside: "avoid", mb: 2 }}>
                        <Cards illustration={apiRestNodeJS} title={t("project_card_tree_title")} description={t("project_card_tree_description")} linkTitle={t("project_btton")} link={"https://github.com/anakarlasantana/Api_rest_nodeJS_Typescript"} />
                    </Box>
                    <Box sx={{ breakInside: "avoid", mb: 2 }}>

                        <Cards illustration={socialLayout} title={t("project_card_four_title")} description={t("project_card_four_description")} linkTitle={t("project_btton")} link={"https://github.com/anakarlasantana/Api_rest_nodeJS_Typescript"} />
                    </Box>
                    <Box sx={{ breakInside: "avoid", mb: 2 }}>
                        <Cards illustration={suncine} title={t("project_card_five_title")} description={t("project_card_five_description")} linkTitle={t("project_btton")} link={"https://github.com/anakarlasantana/SunCine"} />
                    </Box>
                </Box>
            </Stack>

        </Grid>
    );




}

export default Projects;
