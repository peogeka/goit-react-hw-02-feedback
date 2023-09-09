import { Wrapper, Title } from './Section.styled';


export const Section = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);