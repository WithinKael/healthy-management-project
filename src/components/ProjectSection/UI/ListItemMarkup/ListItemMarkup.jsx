import { Category, ListItemWrapper } from "./ListItemMarkup.styled";

import TickList from "../../../TickList/TickList";

const ListItemMarkup = ({ dataList }) => {
  const { category, title, about = [], image } = dataList;
  return (
    <ListItemWrapper>
      <img src={image} alt={title} />
      <div>
        <Category>{category}</Category>
      </div>
      <TickList title={title} about={about} />
    </ListItemWrapper>
  );
};

export default ListItemMarkup;
