import {
  Category,
  ListItemWrapper,
  Title,
  ListItem,
  List,
} from "./ListItemMarkup.styled";

import icon from "../../../../images/sprite.svg";

const ListItemMarkup = ({ dataList }) => {
  const { category, title, about = [], image } = dataList;
  return (
    <ListItemWrapper>
      <img src={image} alt={title} />
      <div>
        <Category>{category}</Category>
      </div>
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
    </ListItemWrapper>
  );
};

export default ListItemMarkup;
