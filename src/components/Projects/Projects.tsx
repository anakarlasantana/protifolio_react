import {
    Box,
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

const projects = [
    {
        illustration: login,
        titleKey: "project_card_one_title",
        descriptionKey: "project_card_one_description",
        link: "https://github.com/anakarlasantana/voting-system",
    },
    {
        illustration: votingSystem,
        titleKey: "project_card_two_title",
        descriptionKey: "project_card_two_description",
        link: "https://github.com/anakarlasantana/voting-system",
    },
    {
        illustration: apiRestNodeJS,
        titleKey: "project_card_tree_title",
        descriptionKey: "project_card_tree_description",
        link: "https://github.com/anakarlasantana/Api_rest_nodeJS_Typescript",
    },
    {
        illustration: socialLayout,
        titleKey: "project_card_four_title",
        descriptionKey: "project_card_four_description",
        link: "https://github.com/anakarlasantana/Api_rest_nodeJS_Typescript",
    },
    {
        illustration: suncine,
        titleKey: "project_card_five_title",
        descriptionKey: "project_card_five_description",
        link: "https://github.com/anakarlasantana/SunCine",
    },
];



function Projects() {
    const { t } = useTranslation();

    return (
        <Stack spacing={5}>
            <SectionDivider icon={<Tag sx={{ color: "#42a96d", fontSize: "32px" }} />} title={"project_title"} />
            <Box
                sx={{
                    columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
                    columnGap: "30px",
                    '@media (max-width:600px)': {
                        paddingLeft: "10vh",
                    },
                    '@media (max-width:500px)': {
                        paddingLeft: "5vh",
                    }
                }}
            >
                {projects.map((project, index) => (
                    <Box key={index} sx={{ breakInside: "avoid", mb: 2 }}>
                        <Cards
                            illustration={project.illustration}
                            title={t(project.titleKey)}
                            description={t(project.descriptionKey)}
                            link={project.link}
                            linkTitle={t("project_btton")}
                        />
                    </Box>
                ))}

            </Box>
        </Stack >

    );




}

export default Projects;
