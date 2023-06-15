import { Grid } from "@mui/material";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

function Home() {
    return (
        <Grid >
        <Header />
        <Layout />
        <Projects />
      </Grid>
    );
}

export default Home;
