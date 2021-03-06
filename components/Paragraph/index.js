import styled, { css } from "styled-components";

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: ${({ highlight }) => (highlight ? "1.8vw" : "1.25vw")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "justify")};
  color: ${({ white }) => (white ? "#fff" : "#000")};
  @media (max-width: 768px) {
    margin-top: 5vw;
    font-size: 3.5vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
export default Paragraph;
