import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case "small":
        return css`
          border: none;
          background-color: #f0a202;
          width: 13.5vw;
          height: 3.3vw;
          font-size: 1.7vw;
          color: white;
          font-family: Montserrat-Bold;
          border-radius: 75px;
        `;
      default:
        return css`
          width: 24.5vw;
          height: 4vw;
          background: #463a8f;
          position: relative;
          border-radius: 75px;
          border: none;
          font-size: 1.7vw;
          font-family: Gotham;
          color: white;
          margin-top: 1vw;
          :before {
            content: "";
            top: 4vw;
            left: -8vw;
            position: absolute;
            background: url("./assets/img/mountainOrange.png");
            background-size: contain;
            width: 8vw;
            height: 3vw;
            background-repeat: no-repeat;
          }
        `;
    }
  }};
`;
export default Button;
