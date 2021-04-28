import styled from "styled-components";

export const DeepCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const DeepCard = styled.div`
  background-color: #f55d3e;
  color: #fff;
  font-size: 1.3vw;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 22vw;
  height: 31vw;
  padding: 4vw 2.1vw 4vw 2.1vw;
  align-items: center;
  box-shadow: -5px 9px 17px 0px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: -5px 9px 17px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -5px 9px 17px 0px rgba(0, 0, 0, 0.21);
`;

export const DeepImg = styled.div`
  width: 8.5vw;
  height: 8.5vw;
  margin-bottom: 2.6vw;
`;

export const DeepTitle = styled.div`
  text-align: center;
  font-size: 1.3vw;
  font-family: Montserrat-Bold;
  height: 6vw;
  margin-bottom: 2vw;
`;
