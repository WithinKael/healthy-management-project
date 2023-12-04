import {
  Category,
  ListItemWrapper,
  StyledImage,
} from "./ListItemMarkup.styled";

import TickList from "../../../TickList/TickList";

const ListItemMarkup = ({ dataList }) => {
  const { category, title, about = [], image } = dataList;
  return (
    <ListItemWrapper>
      <StyledImage src={image} alt={title} />
      <div>
        <Category symbols={category.length}>{category}</Category>
      </div>
      <TickList title={title} about={about} />
    </ListItemWrapper>
  );
};

export default ListItemMarkup;
