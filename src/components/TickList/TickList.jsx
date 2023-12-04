import icon from "../../images/sprite.svg";
import {
  List,
  ListItem,
  Title,
  Icon,
  Comment,
  Wrapper,
} from "./TickList.styled";

const TickList = ({ title, about, comment, additionalComment = false }) => {
  return (
    <Wrapper>
      <Title forDetail={true}>{title}</Title>
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
      {comment && (
        <Comment additionalComment={additionalComment}>{comment}</Comment>
      )}
    </Wrapper>
  );
};

export default TickList;
