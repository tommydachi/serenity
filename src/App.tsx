import React, { useRef, useEffect } from "react";
import { HeadingText, Section, Backdrop, Modal } from "./components";
import {
  AboutMe,
  Experience,
  Projects,
  Contact,
} from "./components/Section/SectionBodies";
import { projects } from "./projects";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 300,
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

  const [selected, setSelected] = React.useState<any>({});
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <div className="Background">
      {/* <Intro /> */}
      <HeadingText useRef={scrollToRef} />
      <Section
        header="About me"
        body={<AboutMe cityHover={cityHover} setCityHover={setCityHover} />}
      />
      <Section
        header="Experience"
        body={<Experience cardOnClick={cardOnClick} />}
      />
      <Section
        header="Projects"
        body={
          <Projects
            projects={projects}
            selected={selected}
            setSelected={setSelected}
            setModalOpen={setModalOpen}
          />
        }
      />
      <Section header={"Contact"} body={<Contact />} />
      <Backdrop modalOpen={modalOpen} handleClose={handleClose} />
      <Modal
        handleClose={handleClose}
        modalOpen={modalOpen}
        selected={selected}
      />
    </div>
  );
}

export default App;
