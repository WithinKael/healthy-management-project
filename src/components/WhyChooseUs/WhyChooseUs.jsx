import {
  ContentTitle,
  ContentWrapper,
  Div,
  Item,
  ItemTitle,
  List,
  SectionChoose,
  Svg,
  Text,
} from "./WhyChooseUs.styled";
import sprite from "../../images/sprite.svg";

const WhyChooseUs = () => {
  return (
    <SectionChoose className="container">
      <ContentWrapper>
        <ContentTitle>Чому обирають нас</ContentTitle>
        <List>
          <Item>
            <Svg>
              <use href={`${sprite}#hands-shake`}></use>
            </Svg>
            <Div>
              <ItemTitle>Надійне партнерство та менторство</ItemTitle>
              <Text>
                Ми налаштовані на довгострокове партнерство і дбаємо про
                комфорті та чесні комунікації
              </Text>
            </Div>
          </Item>
          <Item>
            <Svg>
              <use href={`${sprite}#setting`}></use>
            </Svg>
            <Div>
              <ItemTitle>Індивідуальний підхід</ItemTitle>
              <Text>
                Кожен бізнес і послуга мають свої особливості. Ми занурюємося у
                ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть
                вам досягти успіху
              </Text>
            </Div>
          </Item>
          <Item>
            <Svg>
              <use href={`${sprite}#icon-lamp`}></use>
            </Svg>
            <Div>
              <ItemTitle>Експертні послуги</ItemTitle>
              <Text>
                Ми опираємося на передовий досвід і використовуємо як класичні,
                так і сучасні підходи для досягнення поставленого результату
              </Text>
            </Div>
          </Item>
          <Item>
            <Svg>
              <use href={`${sprite}#icon-puzzle`}></use>
            </Svg>
            <Div>
              <ItemTitle>Комплексні рішення</ItemTitle>
              <Text>
                Наша експертиза дозволяє пропонувати комплексні рішення для
                ефективної співпраці
              </Text>
            </Div>
          </Item>
        </List>
      </ContentWrapper>
    </SectionChoose>
  );
};

export default WhyChooseUs;
