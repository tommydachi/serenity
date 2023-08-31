import React from "react";
import {
  Card,
  HeadingText,
  Intro,
  Section,
  ShowIntroButtons,
} from "./components";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = React.useState<boolean>(false);
  const [cityHover, setCityHover] = React.useState<string>("Rome");
  const cardOnClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className="Background">
      <Intro />
      <HeadingText />

      <Section
        header="About me"
        body={
          <>
            <p>
              Sorry for the start, I was inspired by the latest Spider-Man movie
              and I really wanted to do that.
            </p>
            <p>
              Hi! My name is Tommy and I am a current student at UNSW studying
              Computer Science alongside the Co-op scholarship! I am in my
              penultimate year and will graduate at the end of 2024. Fun fact,
              did you know that in 2024,{" "}
              {cityHover === "Rome" ? (
                <span onMouseEnter={() => setCityHover("Paris")}>Rome</span>
              ) : (
                <span onMouseLeave={() => setCityHover("Rome")}>Paris</span>
              )}{" "}
              will be hosting the Olympics?
            </p>
          </>
        }
      />

      <Section
        header="Experience"
        body={
          <>
            <p>
              Throughout my time at university, I've always placed an emphasis
              on learning outside of my courses. One fateful day, that led me
              down the frontend path, and seeing that it combined my passions
              for both design and development, is the career I want to pursue
              today!
            </p>
            <Card
              image={
                <img
                  src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/008/580/original/Prospa_Icon_Black_CMYK.png?1678066106"
                  alt="Prospa logo"
                  onClick={() => cardOnClick("https://www.prospa.com/")}
                />
              }
              header={
                <div className="card-header-info">
                  <div>Prospa</div>
                  <div className="card-date">May 2023 - Present</div>
                </div>
              }
              body={
                <>
                  <p>
                    I am currently interning as a{" "}
                    <b>Software Engineer Intern</b> at Prospa in the All-in-One
                    team! It's fun, it's a great learning experience, and
                    there's free snacks. What else can I ask for? (Hint: more
                    snacks)
                  </p>
                  <p>
                    I have primarily been working on the frontend with the
                    All-in-One with a ReactJS + TypeScript stack, developing,
                    testing and improving features for Prospa's customers whilst
                    using a variety of tools including Jest and Cypress for
                    testing, GraphQL for API queries, Azure for cloud pipelines
                    and Google Analytics for data tracking!
                  </p>
                </>
              }
            />
            <Card
              image={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png"
                  alt="PWC logo"
                  onClick={() => cardOnClick("https://www.pwc.com.au/")}
                />
              }
              header={
                <div className="card-header-info">
                  <div>PwC</div>
                  <div className="card-date">Dec 2022 - Feb 2023</div>
                </div>
              }
              body={
                <>
                  <p>
                    In the summer of 2022/23, I worked as a{" "}
                    <b>Technology Risk Vacationer</b> at PwC. I wanted to
                    experience a taste of the "Big 4" life, and despite applying
                    for a technology role, they placed me in audit. Due to this,
                    I unfortunately did not enjoy the internship as much as I
                    would have liked.
                  </p>
                  <p>
                    Despite this, I can't say that it is an experience I regret
                    though. I met amazing people, learnt lots about the business
                    world and space that led me to appreciate the inner workings
                    of every business, and did overall enjoy my time there with
                    the intern cohort. Although this role was not what I
                    expected, it was very valuable to me in terms of bolstering
                    my experience, meeting and communicating with new people,
                    and being my first taste of real world work.
                  </p>
                </>
              }
            />
          </>
        }
      />
      <p>
        I am currently interning as a Software Engineer Intern at Prospa - it's
        fun, it's a great learning experience, and there's free snacks. What
        else can I ask for?
      </p>
    </div>
  );
}

export default App;
