import icon from "../../images/sprite.svg";
import { List, ListItem, Title, Icon } from "./TickList.styled";

const TickList = ({ title, about, comment }) => {
  return (
    <>
      <Title>{title}</Title>
      <List>
        {about?.map((item) => (
          <ListItem key={item}>
            <Icon>
              <use href={icon + "#icon-done"}></use>
            </Icon>
            {item}
          </ListItem>
        ))}
      </List>
      {comment && <p>{comment}</p>}
    </>
  );
};

export default TickList;
