import styled from "styled-components";

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 1.25vw;
  text-align: ${({ center }) => (center ? "center" : "justify")};
  color: ${({ white }) => (white ? "#fff" : "#000")};
`;
export default Paragraph;
