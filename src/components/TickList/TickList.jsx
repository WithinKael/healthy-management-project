import icon from "../../images/sprite.svg";
import { List, ListItem, Title } from "./TickList.styled";

const TickList = ({ data: { title, about } }) => {
  return (
    <>
      <Title>{title}</Title>
      <List>
        {about?.map((item) => (
          <ListItem key={item}>
            <svg>
              <use href={icon + "#icon-done"}></use>
            </svg>
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TickList;
