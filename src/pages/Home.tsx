import { Grid } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <Grid >
        <Header />
        <Layout />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact/>
        <Footer />
      </Grid>
    );
}

export default Home;
