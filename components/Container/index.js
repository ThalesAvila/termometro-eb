import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ type }) => {
    switch (type) {
      case "form":
        return css`
          width: 64.5%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          padding: 2.1vw 0.7vw;
          transform: translateY(-7%);
          @media (max-width: 768px) {
            width: 100%;
            transform: translateY(0%);
          }
        `;

      case "report":
        return css`
          width: 82.5%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        `;
      case "full":
        return css`
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

export default Container;
