import icon from "../../images/sprite.svg";
import { List, ListItem, Title } from "./TickList.styled";

const TickList = ({ title, about, comment }) => {
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
      {comment && <p>{comment}</p>}
    </>
  );
};

export default TickList;
