import Page from "./components/Page";
import Section from "./components/Section";
import Home from "./features/home/Home";
import ServicesOffer from "./features/collections/ServicesOffer";
import FeaturedProducts from "./features/products/featuredProducts";
import FeaturedCollections from "./features/collections/FeaturedCollections";

export default function App() {
 
  return <>
    <Page>
        <Section sectionID="home">
          <Home />
        </Section>
      <Section sectionID="services">
        {/* <Collections /> */}
        <div className="my-15">
          <ServicesOffer/>
        </div>
        <FeaturedCollections />
      </Section>
      <Section sectionID="collections">
        <FeaturedProducts/>
      </Section>
      {/* <Section sectionID="about">
        <Fade   cascade fraction={0.2} triggerOnce>
          <About />
        </Fade>
      </Section> */}
    </Page>
  </>
}