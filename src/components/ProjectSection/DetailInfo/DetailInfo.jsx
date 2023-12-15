import TickList from "../../TickList/TickList";
import { Category, Icon, Wrapper } from "./DetailInfo.styled";
import icon from "../../../images/sprite.svg";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

const DetailInfo = ({ dataList: { details, category } }) => {
  const screen = useScreenWidth();
  return (
    <Wrapper>
      <div>
        <Category symbols={category.length}>{category}</Category>
        {screen === "mobile" && (
          <Icon>
            <use href={icon + "#icon-close"}></use>
          </Icon>
        )}
      </div>
      {details.map((item, id) => (
        <TickList
          key={item.title}
          title={item.title}
          about={item.about}
          comment={item.comment}
          additionalComment={id === 0}
          variant="projectDetail"
        />
      ))}
    </Wrapper>
  );
};

export default DetailInfo;
