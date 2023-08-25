import { Grid } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Element } from 'react-scroll';
import ExperienceAndEducation from "../components/ExperienceAndEducation";
import Background from "../components/Background";



function Home() {
  return (
    <Grid >
      <Background />
      <Header />
      <Element name="home">
      <Layout />
      </Element>
      <ExperienceAndEducation />
      <Element name="projects">
        <Projects />
      </Element>
      <Skills />
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </Grid>
  );
}

export default Home;
