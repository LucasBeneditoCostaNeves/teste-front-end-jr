import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 97%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  padding: 8px 0px;
  margin: 0 auto;

  width: 90%;

  .h4-only {
    padding: 2px 0px;
  }

  div {
    display: flex;
    align-items: center;

    .h4-only {
      margin-left: 5px;
    }
  }
`;
