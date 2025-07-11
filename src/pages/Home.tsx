import { Grid } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollElement from '../utils/ScrollElement';
import ExperienceAndEducation from "../components/ExperienceAndEducation/ExperienceAndEducation";



function Home() {
  return (
    <Grid>
      <Header />
      <ScrollElement name="home">
      <Layout />
      </ScrollElement>
      <ExperienceAndEducation />
      <ScrollElement name="projects">
        <Projects />
      </ScrollElement>
      <Skills />
      <ScrollElement name="aboutMe">
        <AboutMe />
      </ScrollElement>
      <ScrollElement name="contact">
        <Contact />
      </ScrollElement>
      <Footer />
    </Grid>
  );
}

export default Home;
