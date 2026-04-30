import { Fade } from "react-awesome-reveal";
import Page from "./components/Page";
import Section from "./components/Section";
import About from "./features/about/About";
import Collections from "./features/collections/Collections";
import FeaturedCollections from "./features/collections/FeaturedCollections";
import Home from "./features/home/Home";

export default function App() {
 
  return <>
    <Page>
        <Section sectionID="home">
          <Home />
        </Section>
      <Section sectionID="services">
        <Collections />
      </Section>
      <Section sectionID="collections">
        <FeaturedCollections />
      </Section>
      <Section sectionID="about">
        <Fade   cascade fraction={0.2}>
          <About />
        </Fade>
      </Section>
    </Page>
  </>
}