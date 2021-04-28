import styled from "styled-components";

export const StepsBox = styled.ul`
  width: 53vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0;
  position: relative;

  :before {
    content: "";
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #483a96;
    position: absolute;
    background-size: contain;
    width: 45vw;
    height: 0.5vw;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    width: 100%;
    :before {
      width: 75vw;
      height: 1vw;
    }
  }
`;

export const Circle = styled.li`
  font-family: "Gotham-black";
  z-index: 2;
  color: white;
  background-color: ${({ active }) => (active ? "#F55D3E" : "#483a96")};
  width: 2.6vw;
  height: 2.6vw;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-radius: 10vw;

  @media (max-width: 768px) {
    height: 10vw;
    width: 10vw;
    margin: 0 5vw;
    font-size: 5vw;
  }
`;
