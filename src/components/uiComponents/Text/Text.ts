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
  @media (max-width: 768px){
    text-align: center;
    font-size: 16px;
  line-height: 28px;
  color: #D0D6F9;
  }
  @media (max-width: 450px){
    font-size: 15px;
    line-height: 25px;
    margin-top: 16px;
  }
`;