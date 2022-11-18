import styled from "styled-components";

type TextProps = {
  marginTop: number;
}

export const Text = styled.span<TextProps>`
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  color:rgba(208, 214, 249, 1);
  line-height: 32px;
  margin-top: ${({marginTop})=> marginTop}px;
`;