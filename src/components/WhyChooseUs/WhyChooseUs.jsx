import {
  ContentTitle,
  ContentWrapper,
  Item,
  ItemTitle,
  List,
  Text,
} from "./WhyChooseUs.styled";

const WhyChooseUs = () => {
  return (
    <section className="container">
      <ContentWrapper>
        <ContentTitle>Чому обирають нас</ContentTitle>
        <List>
          <Item>
            <ItemTitle>Надійне партнерство та менторство</ItemTitle>
            <Text>
              Ми налаштовані на довгострокове партнерство і дбаємо про комфорті
              та чесні комунікації
            </Text>
          </Item>
          <Item>
            <ItemTitle>Індивідуальний підхід</ItemTitle>
            <Text>
              Кожен бізнес і послуга мають свої особливості. Ми занурюємося у
              ваш бізнес і пропонуємо індивідуальні стратегії, які допоможуть
              вам досягти успіху
            </Text>
          </Item>
          <Item>
            <ItemTitle>Експертні послуги</ItemTitle>
            <Text>
              Ми опираємося на передовий досвід і використовуємо як класичні,
              так і сучасні підходи для досягнення поставленого результату
            </Text>
          </Item>
          <Item>
            <ItemTitle>Комплексні рішення</ItemTitle>
            <Text>
              Наша експертиза дозволяє пропонувати комплексні рішення для
              ефективної співпраці
            </Text>
          </Item>
        </List>
      </ContentWrapper>
    </section>
  );
};

export default WhyChooseUs;
