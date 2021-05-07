import styled from "styled-components";
import Collapse, { Panel } from "rc-collapse";

export const Collapses = styled(Collapse)`
  width: 34.5vw;
  border: none;
  background-color: #fff;
  border: solid 1px #fff;
  .square {
    background-color: #fff;
    width: 3.3vw;
    height: 3.3vw;
    border: solid 0.25vw #463a8f;
    margin-right: 1vw;
    border-radius: 5px;
  }
  & > .rc-collapse-item {
    border-top: none;
    position: relative;

    & > .rc-collapse-header {
      color: #000;
      font-family: "Montserrat-Bold";
    }
  }
  .rc-collapse-header {
    border: solid 0.25vw #f55d3e;
    border-radius: 5px;
    background-color: #fff;
    :before {
      content: "";
      width: 2.1vw;
      height: 2.6vw;
      top: 1.5vw;
      right: 0.5vw;
      position: absolute;
      background: url("./assets/img/arrow.png");
      background-size: contain;
      background-repeat: no-repeat;
    }    
  }
  .rc-collapse-content-box {
    color: #000;
    background-color: #ebebeb;
    margin: 0;
    font-size: 1vw;
    border-radius: 8px;
    padding: 1.3vw 1.8vw;
    text-align: start;
    
  }
  /* .rc-collapse-content-active {
    :before {
      content: "";
      width: 2.1vw;
      height: 2.6vw;
      top: 1.5vw;
      right: 0.5vw;
      position: absolute;
      background: url("./assets/img/arrow.png");
      transform: rotate(180deg);
      background-size: contain;
      background-repeat: no-repeat;
    }
  } */

  @media (max-width: 768px) {
    margin-top: 5vw;
    width: 80vw;
    flex-direction: column;
    justify-content: center;
    & > .rc-collapse-item {
      border-top: none;
      position: relative;
      width: 100%;
    }
    .rc-collapse-content-box {
      font-size: 4vw;
      padding: 5vw;
    }
  }
`;

export const Check =  styled.div`
  position: absolute;
  top: -2px;
  left: 22px;
  clip-path: polygon(12% 53%, 38% 72%, 84% 13%, 100% 25%, 41% 100%, 0 69%);
  background-color: green;
  width: 50px;
  height: 50px;
`;

export const Header = styled.div`
  background-color: #fff;
`;

export const Panels = styled(Panel)`
  font-family: "Montserrat-Medium";
  width: 34.5vw;
  margin-bottom: 0.5vw;
  background-color: #fff;
  color: #000;
`;
