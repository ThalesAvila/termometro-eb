import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ type }) => {
    switch (type) {
      case "report":
        return css`
          width: 82.5%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        `;
      default:
        return css`
          width: 77%;
          margin: 0 auto;
          padding: 0 4.7vw;
          display: flex;
          flex-wrap: wrap;
        `;
    }
  }};
`;

export default Container;
