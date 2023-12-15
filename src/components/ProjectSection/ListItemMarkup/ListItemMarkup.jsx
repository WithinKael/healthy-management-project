import {
  Category,
  DetailsBtn,
  ListItemWrapper,
  StyledImage,
  HiddenInfo,
} from "./ListItemMarkup.styled";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

import DetailInfo from "../DetailInfo/DetailInfo";
import TickList from "../../TickList/TickList";

const ListItemMarkup = ({
  dataList,
  isDetailInfoVisible,
  setisDetailInfoVisible,
}) => {
  const screenWidth = useScreenWidth();
  const { category, title, about = [], image } = dataList;

  const handleHover = (e) => {
    setisDetailInfoVisible((prev) => !prev);
    console.dir(e.target);
  };

  return (
    <>
      <ListItemWrapper>
        <StyledImage src={image} alt={title} onMouseEnter={handleHover} />
        <HiddenInfo
          isVisible={isDetailInfoVisible}
          image={image}
          className={isDetailInfoVisible ? "" : "visually-hidden"}
          onMouseLeave={handleHover}
        >
          <DetailInfo dataList={dataList} />
        </HiddenInfo>

        <div>
          <Category symbols={category.length}>{category}</Category>
        </div>
        <TickList title={title} about={about} variant="project" />
      </ListItemWrapper>
      {screenWidth === "mobile" && <DetailsBtn>Детальніше</DetailsBtn>}
    </>
  );
};

export default ListItemMarkup;
