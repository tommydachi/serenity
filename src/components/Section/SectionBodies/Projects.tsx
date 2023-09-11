import React from "react";
import styles from "./Projects.module.scss";
import { ProjectsCard } from "../../Cards";
import { Modal } from "../../Modal/Modal";
import { motion } from "framer-motion";

type Props = {
  projects: any[];
  selected: any;
  setSelected: (selected: any) => void;
  setModalOpen: (modalOpen: boolean) => void;
};

export const Projects = ({
  projects = [],
  selected,
  setSelected,
  setModalOpen,
}: Props) => {
  const onClick = (project: any) => {
    setModalOpen(true)
    setSelected(project)
    document.body.style.overflow = "hidden"
  }

  return (
    <>
      <div className={styles.Projects}>
        {projects.map((project, index) => {
          return (
            <div
              className={styles.ProjectsCardContainer}
              key={`${project.name}-${index}`}
            >
              <ProjectsCard
                name={project.name}
                description={project.description}
                type={project.type}
                onClick={() => onClick(project)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
