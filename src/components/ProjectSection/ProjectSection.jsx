import { useScreenWidth } from "../../hooks/useScreenWidth";
import data from "./data";
import icon from "../../images/sprite.svg";

import {
  Title,
  List,
  ActionBtn,
  SectionWrapper,
  Icon,
} from "./ProjectSection.styled";
import ProjectSectionCard from "./ProjectSectionCard/ProjectSectionCard";
import { useState } from "react";

const ProjectSection = () => {
  const screenWidth = useScreenWidth();

  const [projectList, setProjectList] = useState(
    screenWidth === "mobile" || screenWidth === "tablet"
      ? [...data.slice(0, 1)]
      : [...data]
  );
  const handleListChange = () => {
    if (projectList.length > 2) {
      setProjectList((prev) => prev.slice(0, 1));
    } else {
      setProjectList([...data]);
    }
  };

  return (
    <SectionWrapper
      id="projects"
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <Title>Проєкти</Title>
      <List>
        {projectList.map((item) => (
          <ProjectSectionCard key={item.category} item={item} />
        ))}
      </List>
      {screenWidth === "mobile" && (
        <ActionBtn onClick={handleListChange}>
          {projectList.length > 3 ? "Менше проєктів" : "Більше проєктів"}
          <Icon>
            <use
              href={
                icon +
                `${
                  projectList.length > 3 ? "#icon-arrowup" : "#icon-arrowdown"
                }`
              }
            ></use>
          </Icon>
        </ActionBtn>
      )}
    </SectionWrapper>
  );
};

export default ProjectSection;
