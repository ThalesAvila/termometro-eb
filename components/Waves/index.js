import styled, { css } from "styled-components";

const Waves = styled.div`
  ${(props) =>
    props.yellow &&
    css`
      position: relative;
      width:100%;
      height: 39vw;
      :before {
        content: "";
        top: ${props.small ? `-10vw` : 0};
        left: 0;
        position: absolute;
        background: url("./assets/img/wave.png");
        background-size: contain;
        width: 100%;
        height: 39vw;
        background-repeat: no-repeat;
        z-index: -1;
      }
      :after{
        content: "";
        top: 9vw;
        z-index: -2;
        right: 2vw;
        position: absolute;
        background: url("./assets/img/cookie.png");
        background-size: contain;
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
        transform: rotate(270deg);
      }
    }
  `}
  ${(props) =>
    props.purple &&
    css`
      position: relative;
      width:100%;
      height: 20vw;
      :before {
        content: "";
        top: 2vw;
        z-index:-1;
        left: 0;
        position: absolute;
        background: url("./assets/img/wave2.png");
        background-size: contain;
        width: 100%;
        height: 31vw;
        background-repeat: no-repeat;
      }
      :after{
        content: "";
        top: 23vw;
        position: absolute;
        background: url("./assets/img/cookie2.png");
        background-size: contain;
        width: 15vw;
        height: 15vw;
        background-repeat: no-repeat;
      }
    }
  `}

  ${(props) =>
    props.salmon &&
    css`
      position: relative;
      width:100%;
      height: 37vw;
      :before {
        content: "";
        z-index:-1;
        left: 0;
        position: absolute;
        background: url("./assets/img/wave3.png");
        background-size: contain;
        width: 100%;
        height: 37vw;
        background-repeat: no-repeat;
      }
    }
  `}

  ${(props) =>
    props.green &&
    css`
      position: relative;
      width:100%;
      height: 37vw;
      :before {
        content: "";
        z-index:-1;
        left: 0;
        position: absolute;
        background: url("./assets/img/wave4.png");
        background-size: contain;
        width: 100%;
        height: 37vw;
        background-repeat: no-repeat;
      }
    }
  `}
`;

export default Waves;
