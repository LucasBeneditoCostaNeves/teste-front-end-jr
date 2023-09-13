import { styled } from "styled-components";

export const DivStyledBackground = styled.div`
  position: relative;

  color: var(--white);

  font-size: 33px;
  font-weight: 500;

  img {
    width: 100%;
    min-height: 285px;
  }

  div {
    position: absolute;
    top: 47px;
    left: 10%;
  }

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 14px;
  }

  button {
    width: 195px;
    height: 60px;

    border: none;
    border-radius: 5px;
    margin-top: 36px;

    color: var(--white);
    background: var(--pink);

    font-size: 18px;
    font-weight: 700;
  }
`;
