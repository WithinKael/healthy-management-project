import {
  Category,
  DetailsBtn,
  ListItemWrapper,
  StyledImage,
} from "./ListItemMarkup.styled";
import { useScreenWidth } from "../../../../hooks/useScreenWidth";

import TickList from "../../../TickList/TickList";

const ListItemMarkup = ({ dataList, onClick }) => {
  const screenWidth = useScreenWidth();
  const { category, title, about = [], image } = dataList;

  return (
    <ListItemWrapper onClick={onClick}>
      <StyledImage src={image} alt={title} />
      <div>
        <Category symbols={category.length}>{category}</Category>
      </div>
      <TickList title={title} about={about} variant="project" />
      {screenWidth === "mobile" && <DetailsBtn>Детальніше</DetailsBtn>}
    </ListItemWrapper>
  );
};

export default ListItemMarkup;
