import data from "./data";

import { Title, List, ListItem } from "./ProjectSection.styled";
import ListItemMarkup from "./UI/ListItemMarkup/ListItemMarkup";

const ProjectSection = () => {
  return (
    <section
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <Title>Проєкти</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.category}>
            <ListItemMarkup dataList={item} />
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default ProjectSection;
