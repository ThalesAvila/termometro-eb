import styled, { css } from "styled-components";

const Column = styled.div`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${({ small }) =>
    small &&
    css`
      width: 45%;
    `}
  ${({ big }) =>
    big &&
    css`
      width: 55%;
    `}

    ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}
    @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Column;
