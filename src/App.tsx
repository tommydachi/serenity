import React, { useRef } from "react";
import { ContactButton, HeadingText, Intro, Section } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AboutMe } from "./components/Section/SectionBodies/AboutMe";
import { Experience } from "./components/Section/SectionBodies/Experience";
import { Contact } from "./components/Section/SectionBodies/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 250,
    });
    AOS.refresh();
  }, []);

  const scrollToRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY === 0) {
        window.scrollTo({
          top: scrollToRef?.current?.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const [cityHover, setCityHover] = React.useState<string>("Rome");
  const cardOnClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="Background">
      <Intro />
      <HeadingText useRef={scrollToRef} />

      <Section
        header="About me"
        body={<AboutMe cityHover={cityHover} setCityHover={setCityHover} />}
      />

      <Section
        header="Experience"
        body={<Experience cardOnClick={cardOnClick} />}
      />

      <Section header={"Contact"} body={<Contact />} />
    </div>
  );
}

export default App;
