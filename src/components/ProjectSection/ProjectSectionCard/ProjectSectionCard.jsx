import { HiddenInfo, ListItem } from "./ProjectSectionCard.styled";
import DetailInfo from "../UI/DetailInfo/DetailInfo";
import ListItemMarkup from "../UI/ListItemMarkup/ListItemMarkup";
import { useState } from "react";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

const ProjectSectionCard = ({ item }) => {
  const [isDetailInfoVisible, setisDetailInfoVisible] = useState(false);
  const screenWidth = useScreenWidth();

  const mobileOnDetailBtnClick = () => {
    if (screenWidth === "mobile") {
      setisDetailInfoVisible((prev) => !prev);
    }
  };
  return (
    <ListItem>
      <ListItemMarkup dataList={item} onClick={mobileOnDetailBtnClick} />
      <HiddenInfo
        isVisible={isDetailInfoVisible}
        onClick={mobileOnDetailBtnClick}
        image={item.image}
        className={
          !isDetailInfoVisible && screenWidth === "mobile"
            ? "visually-hidden"
            : ""
        }
      >
        <DetailInfo dataList={item} />
      </HiddenInfo>
    </ListItem>
  );
};

export default ProjectSectionCard;
