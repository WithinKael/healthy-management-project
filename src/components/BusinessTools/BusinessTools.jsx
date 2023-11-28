import {
  BusinessToolsTitle,
  BusinessToolsWrapper,
  ItemTools,
  ListTools,
} from "./BusinessTools.styled";
import { data } from "./data";

const BusinessTools = () => {
  return (
    <section className="container">
      <BusinessToolsWrapper>
        <BusinessToolsTitle>
          Бізнес <span>інструменти</span>, які використувуємо в партнерстві
        </BusinessToolsTitle>
        <ListTools>
          {data.map((item) => {
            return <ItemTools key={item.id}>{item.tool}</ItemTools>;
          })}
        </ListTools>
      </BusinessToolsWrapper>
    </section>
  );
};

export default BusinessTools;
