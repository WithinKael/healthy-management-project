import { useMediaQuery } from "react-responsive";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import data from "./data";

import { Title, List, ListItem, HiddenInfo } from "./ProjectSection.styled";
import DetailInfo from "./UI/DetailInfo/DetailInfo";
import ListItemMarkup from "./UI/ListItemMarkup/ListItemMarkup";

const ProjectSection = () => {
  const screenWidth = useScreenWidth();
  return (
    <section
      id="projects"
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <Title>Проєкти</Title>
      <List>
        {data.map((item) => (
          <ListItem key={item.category}>
            <ListItemMarkup dataList={item} screenWidth={screenWidth} />
            <HiddenInfo image={item.image}>
              <DetailInfo dataList={item} />
            </HiddenInfo>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default ProjectSection;
