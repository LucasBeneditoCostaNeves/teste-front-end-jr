import { styled } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;
  padding: 10px 0px;

  border-bottom: solid 3px #f0f0f0;
  border-top: solid 3px #f0f0f0;

  width: 90%;

  .div-input {
    width: 40%;
    position: relative;

    input {
      width: 100%;
      height: 40px;

      padding: 4px 8px;

      border: none;
      border-radius: 8px;

      background-color: #f6f5f2;
    }

    input::placeholder {
      font-size: 16px;
      color: #9f9f9f;
    }

    img {
      position: absolute;
      right: 0;
      top: 10px;
    }
  }

  .div-icon {
    display: flex;
    align-items: center;

    width: max-content;
    height: max-content;

    img {
      margin-left: 25px;
    }
  }
`;
