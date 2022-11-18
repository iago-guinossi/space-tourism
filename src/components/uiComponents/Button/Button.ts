import styled from "styled-components";

export const Button = styled.button`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  background-color: transparent;
  border: none;
  height: 100%;
  margin: 0 24px;
  &:hover {
    box-sizing: border-box;
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
    border-top: solid 3px transparent;
  }
  &:active {
    box-sizing: border-box;
    border-bottom: solid 3px #ffffff;
    border-top: solid 3px transparent;
  }
`;