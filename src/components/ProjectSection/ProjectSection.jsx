import data from "./data";

import { Title, List, ListItem } from "./ProjectSection.styled";

const ProjectSection = () => {
  return (
    <section className="container">
      <Title>Проєкти</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.category}>{item.category}</ListItem>
        ))}
      </List>
    </section>
  );
};

export default ProjectSection;
