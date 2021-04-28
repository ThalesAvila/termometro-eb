import styled from "styled-components";

export const inputBox = styled.div`
  color: #364050;
  font-family: "Montserrat";
  font-size: 1vw;
  margin: 1vw 0;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const defaultSelect = styled.select`
  color: #364050;
  font-family: "Montserrat";
  font-size: 1vw;
  height: 3vw;
  margin-bottom: 0;
  color: #201e5a;
  border: 1px solid #f4f6fc;
  border-radius: 3px;
  background-color: #f4f6fc;
  width: 100%;
  padding: 0 1.1vw;
  box-sizing: border-box;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  outline: 0;
  @media (max-width: 768px) {
    height: 8vw;
    font-size: 4vw;
  }
`;

export const defaultLabel = styled.label`
  margin: 1vw 0;
  font-size: 1.1vw;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const defaultInput = styled.input`
  margin-top: 0.5vw;
  height: 3vw;
  font-family: "Montserrat";
  font-size: 1vw;
  margin-bottom: 0;
  color: #201e5a;
  border: 1px solid #f4f6fc;
  border-radius: 3px;
  background-color: #f4f6fc;
  width: 100%;
  padding: 1vw 1.1vw;
  box-sizing: border-box;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  outline: 0;
  text-shadow: none;
  @media (max-width: 768px) {
    height: 8vw;
    font-size: 5vw;
  }
`;

export const DefaultSubmit = styled.input`
  width: 6vw;
  height: 2vw;
  background: #483699;
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
`;
