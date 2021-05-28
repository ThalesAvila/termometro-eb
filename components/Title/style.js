import styled, { css } from "styled-components";

export const Title = styled.h2`
  padding-left: ${({ hero }) => (hero ? "1vw" : 0)};
  line-height: ${({ hero }) => (hero ? 0.86 : 1)};
  color: ${({ color }) => {
    switch (color) {
      case "survival":
        return "#F55D3E";
      case "optimization":
        return "#F0A202";
      case "purple":
        return "#483699";
      case "prosperity":
        return "#419D78";
      case "white":
        return "#fff";
      default:
        return "#000";
    }
  }};
  ${({ type }) => {
    switch (type) {
      case "hero":
        return css`
          font-family: Gotham-black;
          font-size: 7.2vw;
          @media (max-width: 768px) {
            width: 5vw;
          }
        `;
      case "report-title":
        return css`
          font-family: Gotham-black;
          font-size: 3.2vw;
          @media (max-width: 768px) {
            margin-top:9vw;
            font-size: 4vw;
            
        `;
      case "deep":
        return css`
          font-family: Gotham-book;
          font-size: 1.7vw;
          text-align: center;
          & > strong {
            font-size: 3.2vw;
            font-family: Gotham-black;
          }
          @media (max-width: 768px) {
            font-size: 4vw;
            & > strong {
              font-size: 6vw;
            }
          }
        `;
      case "about":
        return css`
          font-family: Gotham-book;
          font-size: 4vw;
          & > strong {
            font-size: 4.2vw;
            font-family: Gotham-black;
          }
          @media (max-width: 768px) {
            font-size: 7.3vw;
            & > strong {
              font-size: 9vw;
            }
          }
        `;
      case "report-hero":
        return css`
          font-family: Gotham-book;
          font-size: 3.5vw;
          & > strong {
            font-size: 3.2vw;
            font-family: Gotham-black;
          }
          @media (max-width: 768px) {
            font-size: 4vw;
            & > strong {
              font-size: 5vw;
            }
          }
        `;
      default:
        return css`
          font-family: Gotham-medium;
          font-size: 2.3vw;
          & > strong {
            font-size: 3vw;
            font-family: Gotham-black;
          }
          @media (max-width: 768px) {
            margin-top: 9vw;
            font-size: 4.3vw;
            & > strong {
              font-size: 7vw;
            }
          }
        `;
    }
  }};
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const RotatedTitle = styled.span`
  transform: rotate(-90deg);
  font-family: Gotham-black;
  line-height: 7.2vw;
  top: 15vw;
  left: 8.6vw;
  position: absolute;
  color: #483699;
  font-size: 2.1vw;
  @media (max-width: 768px) {
    font-size: 4vw;
    transform: rotate(0deg);
    top: 9vw;
    left: 10.6vw;
  }
`;
