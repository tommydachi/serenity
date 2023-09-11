import { WorkCard } from "../../Cards";
import styles from "../../Cards/WorkCard/WordCard.module.scss";

type Props = {
  cardOnClick: (url: string) => void;
};

export const Experience = ({ cardOnClick }: Props) => {
  return (
    <>
      <p>
        Throughout my time at university, I've always placed an emphasis on
        learning outside of my courses. One fateful day, that led me down the
        frontend path, and seeing that it combined my passions for both design
        and development, is the career I want to pursue today!
      </p>
      <WorkCard
        image={
          <img
            src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/008/580/original/Prospa_Icon_Black_CMYK.png?1678066106"
            alt="Prospa logo"
            onClick={() => cardOnClick("https://www.prospa.com/")}
          />
        }
        header={
          <div className={styles.CardHeaderInfo}>
            <div>Prospa</div>
            <div className={styles.CardDate}>May 2023 - Present</div>
          </div>
        }
        body={
          <>
            <p>
              I am currently interning as a <b>Software Engineer Intern</b> at
              Prospa in the All-in-One team! It's fun, it's a great learning
              experience, and there's free snacks. What else can I ask for?
              (Hint: more snacks)
            </p>
            <p>
              I have primarily been working on the frontend with the All-in-One
              team with a ReactJS + TypeScript stack, developing, testing and
              improving features for Prospa's customers whilst using a variety
              of tools including Jest and Cypress for testing, GraphQL for API
              queries, Azure for cloud pipelines and Google Analytics for data
              tracking!
            </p>
            <p>
              This has been a great internship for me so far, meeting so many
              different and talented people, as well as being able to solve
              complex problems, and being able to work in the technology
              industry for the first time! I truly believe that (as cliche as this is) I have grown, not
              only as an engineer in this time, but as a team member and a person throughout this internship. 
            </p>
          </>
        }
      />
      <WorkCard
        image={
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png"
            alt="PWC logo"
            onClick={() => cardOnClick("https://www.pwc.com.au/")}
          />
        }
        header={
          <div className={styles.CardHeaderInfo}>
            <div>PwC</div>
            <div className={styles.CardDate}>Dec 2022 - Feb 2023</div>
          </div>
        }
        body={
          <>
            <p>
              In the summer of 2022/23, I worked as a{" "}
              <b>Technology Risk Vacationer</b> at PwC. I wanted to experience a
              taste of the "Big 4" life, and despite applying for a technology
              role, they placed me in audit. Due to this, I unfortunately did
              not enjoy the internship as much as I would have liked.
            </p>
            <p>
              Despite this, I can't say that it is an experience I regret
              though. I met amazing people, learnt lots about the business world
              and space that led me to appreciate the inner workings of every
              business, and did overall enjoy my time there with the intern
              cohort. Although this role was not what I expected, it was very
              valuable to me in terms of bolstering my experience, meeting and
              communicating with new people, and being my first taste of real
              world work.
            </p>
          </>
        }
      />
    </>
  );
};
