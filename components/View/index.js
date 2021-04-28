import styled, { css } from "styled-components";

const View = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.around ? "space-around" : "flex-start")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};

  ${({ cookie }) =>
    cookie &&
    css`
      :before {
        content: "";
        z-index: -1;
        right: 0;
        position: absolute;
        background: url("./assets/img/cookie3.png");
        background-size: contain;
        width: 16.6vw;
        height: 18.2vw;
        background-repeat: no-repeat;
      }
      :after {
        content: "";
        z-index: -1;
        right: 13vw;
        position: absolute;
        background: url("./assets/img/mountain2.png");
        background-size: contain;
        width: 8vw;
        height: 3.2vw;
        background-repeat: no-repeat;
      }
    `};
`;

export default View;
