import styled from "styled-components";

export const Title = styled.h1`
  padding-left: ${({ hero }) => (hero ? "1vw" : 0)};
  line-height: ${({ hero }) => (hero ? 0.86 : 1)};
  font-family: ${({ type }) => {
    switch (type) {
      case "hero":
      case "report-title":
        return "Gotham-black";
      case "about":
        return "Gotham-book";
      case "deep":
      case "report-hero":
        return "Gotham-book";
      default:
        return "Gotham-medium";
    }
  }};
  font-size: ${({ type }) => {
    switch (type) {
      case "hero":
        return "7.2vw";
      case "about":
        return "4vw";
      case "deep":
        return "1.7vw";
      case "report-hero":
        return "3.5vw";
      case "report-title":
        return "3.2vw";
      default:
        return "2.3vw";
    }
  }};
  text-align: ${({ type }) => {
    switch (type) {
      case "deep":
        return "center";
      default:
        return "left";
    }
  }};
  color: ${({ color }) => {
    switch (color) {
      case "salmon":
        return "#F55D3E";
      case "yellow":
        return "#F0A202";
      case "purple":
        return "#483699";
      case "green":
        return "#419D78";
      case "white":
        return "#fff";
      default:
        return "#000";
    }
  }};
  & > strong {
    font-size: ${({ type }) => {
      switch (type) {
        case "deep":
          return "4.3vw";
        case "about":
          return "4vw";
        case "report-hero":
          return "3.5vw";
        default:
          return "3vw";
      }
    }};
    font-family: Gotham-black;
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
`;
