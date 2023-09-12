import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 90%;
  margin: 15px auto 0px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 95%;
    max-width: 120px;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
  }

  div:focus {
    h5 {
      color: var(--pink);
    }
  }

  div:focus-visible {
    outline: none;
  }

  h5 {
    margin-top: 15px;
  }

  img {
    width: 40px;
    height: 40px;

    padding: 22px 22px;
    background: #f4f4f4;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
