import styled from "styled-components";

export const EbCardGroup = styled.div`
  margin-top: 7vw;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const EbCard = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-family: "Gotham-black";
  font-size: 1.25vw;
  color: #f55d3e;
  width: 14.5vw;
  @media (max-width: 768px) {
    width: 27.5vw;
    margin-top: 8vw;
    font-size: 2vw; 
  }
  
}
`;

export const EbImg = styled.div`
  width: 5.7vw;
  height: 5.7vw;
  @media (max-width: 768px) {
    width: 13.7vw;
    height: auto;
  }
`;

export const EbTitle = styled.div`
  height: 3vw;
  margin-top: 1vw;
`;
