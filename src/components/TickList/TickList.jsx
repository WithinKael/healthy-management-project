import icon from "../../images/sprite.svg";
import { List, ListItem, Title, Icon, Comment } from "./TickList.styled";

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
      {comment && <Comment>{comment}</Comment>}
    </>
  );
};

export default TickList;
