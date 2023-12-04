import data from "./data";

import { Title, List } from "./ProjectSection.styled";
import ProjectSectionCard from "./ProjectSectionCard/ProjectSectionCard";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <Title>Проєкти</Title>
      <List>
        {data.map((item) => (
          <ProjectSectionCard key={item.category} item={item} />
        ))}
      </List>
    </section>
  );
};

export default ProjectSection;
