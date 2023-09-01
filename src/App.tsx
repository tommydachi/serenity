import React from "react";
import { ContactButton, HeadingText, Intro, Section } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AboutMe } from "./components/Section/SectionBodies/AboutMe";
import { Experience } from "./components/Section/SectionBodies/Experience";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 250
    });
    AOS.refresh();
  }, []);
  const [cityHover, setCityHover] = React.useState<string>("Rome");
  const cardOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="Background">
      <Intro />
      <HeadingText />

      <Section
        header="About me"
        body={<AboutMe cityHover={cityHover} setCityHover={setCityHover} />}
      />

      <Section
        header="Experience"
        body={<Experience cardOnClick={cardOnClick} />}
      />

      <Section header={"Contact"} body={
        <>
        <p>I'm always available for a chat - feel free to message me on LinkedIn or shoot me an email!</p>
        <ContactButton />
        </>


      } />
    </div>
  );
}

export default App;
