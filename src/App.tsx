import Page from "./components/Page";
import Section from "./components/Section";
import Home from "./features/home/Home";

export default function App(){
  return <>
    <Page>
      <Section sectionID="home">
          <Home/>
      </Section>

    </Page>
  </>
}