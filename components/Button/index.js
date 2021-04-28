import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case "form":
        return css`
          width: 6vw;
          height: 2vw;
          background: #f55d3e;
          font-weight: 400;
          font-size: 1vw;
          line-height: 1vw;
          color: white;
          border: 0 none;
          border-radius: 25px;
          cursor: pointer;
          padding: 10px;
          margin: 0 0 0 1vw;
          font-family: Montserrat-Bold;
          @media (max-width: 768px) {
            display: block;
            margin: 0 auto;
            width: 30vw;
            height: 5vw;
            font-size: 2.3vw;
          }
        `;
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
          @media (max-width: 768px) {
            width: 30vw;
            height: 5vw;
            font-size: 2.3vw;
          }
        `;
      case "hero":
        return css`
          width: 24.5vw;
          height: 4vw;
          background: #463a8f;
          border-radius: 75px;
          border: none;
          font-size: 1.7vw;
          font-family: Gotham;
          color: white;
          position: absolute;
          top: 2vw;
          right: 14vw;
          margin-top: 1vw;
          :before {
            display: none;
          }
          @media (max-width: 768px) {
            width: 30vw;
            height: 5vw;
            font-size: 2.3vw;
          }
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
          @media (max-width: 768px) {
            margin-top: 2vw;
            width: 65vw;
            height: 10vw;
            font-size: 3.7vw;
            :before {
              display: none;
            }
          }
        `;
    }
  }};
`;
export default Button;
