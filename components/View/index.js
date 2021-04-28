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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    ${({ thermometer }) =>
      thermometer &&
      css`
        width: 50vw;
      `}
    ${({ about }) =>
      about &&
      css`
        width: 70vw;
      `}
      ${({ reportSubText }) =>
      reportSubText &&
      css`
        width: 80vw;
        display: block;
        margin: 0 auto;
      `}
      ${({ reportText }) =>
      reportText &&
      css`
        width: 85vw;
        display: block;
        margin: 2vw auto;
        :before {
          display: none;
        }
        :after {
          display: none;
        }
      `}
      ${({ reportBoxText }) =>
      reportBoxText &&
      css`
        width: 85vw;
        h1 {
          font-size: 6.3vw;
        }
      `}
      ${({ formInput }) =>
      formInput &&
      css`
        @media (max-width: 768px) {
          height: auto;
        }
      `}
      ${({ formHeader }) =>
      formHeader &&
      css`
        height: 25vw;
      `}
      ${({ headerImg }) =>
      headerImg &&
      css`
        width: 40vw;
        margin-top: 5vw;
      `}
  }
`;

export default View;
