import {
  Container,
  Items,
  Item,
  BrandComponent,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Container>
    <Items>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item orange>
        Total:<BrandComponent>{total}</BrandComponent>
      </Item>
      <Item orange>
        Positive feedback:
        <BrandComponent>{positivePercentage}%</BrandComponent>
      </Item>
    </Items>
  </Container>
);

export default Statistics;