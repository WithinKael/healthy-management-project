import {
  BusinessToolsTitle,
  BusinessToolsWrapper,
  ItemTools,
  ListTools,
  Section,
} from "./BusinessTools.styled";
import { data } from "./data";

const BusinessTools = () => {
  return (
    <Section className="container">
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
    </Section>
  );
};

export default BusinessTools;
