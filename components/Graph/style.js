import styled from "styled-components";

export const BoxGraph = styled.div`
    font-family: "Gotham-black";
    width: 13.5vw;
    position:relative;
    :before {
        content: "";
        z-index:-1;
        top:50%;
        left: 50%;
        transform:translate(-50%,-50%);
        position: absolute;
        background: url("./assets/img/balls.png");
        background-size: contain;
        width: 16.5vw;
        height: 16.5vw;
        background-repeat: no-repeat;
      }
  }
`;

export const GraphTitle = styled.p`
  font-family: Gotham-bold;
  font-size: 1.5vw;
  color: ${({ color }) => color};
  text-align: center;
`;
