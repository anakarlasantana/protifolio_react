import { Grid } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
    return (
        <Grid >
        <Header />
        <Layout />
        <Projects />
        <Skills />
      </Grid>
    );
}

export default Home;
