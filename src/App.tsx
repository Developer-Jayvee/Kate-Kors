import Page from "./components/Page";
import Section from "./components/Section";
import Collections from "./features/collections/Collections";
import Home from "./features/home/Home";

export default function App() {
  return <>
    <Page>
      <Section sectionID="home">
        <Home />
      </Section>
      <Section sectionID="collections">
        <Collections />
      </Section>
    </Page>
  </>
}