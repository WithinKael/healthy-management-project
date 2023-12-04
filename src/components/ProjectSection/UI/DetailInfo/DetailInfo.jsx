import TickList from "../../../TickList/TickList";
import { Category, Wrapper } from "./DetailInfo.styled";

const DetailInfo = ({ dataList: { details, category } }) => {
  return (
    <Wrapper>
      <div>
        <Category>{category}</Category>
      </div>
      {details.map((item, id) => (
        <TickList
          key={item.title}
          title={item.title}
          about={item.about}
          comment={item.comment}
          additionalComment={id === 0}
        />
      ))}
    </Wrapper>
  );
};

export default DetailInfo;
