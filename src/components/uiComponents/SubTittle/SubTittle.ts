import styled from "styled-components";

type SubtittleProps ={
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export const SubTittle = styled.span<SubtittleProps>`
  font-family: "Barlow Condensed", sans-serif;
  font-size: ${({fontSize})=> fontSize}px;
  color: rgba(208, 214, 249, 1);
  line-height: ${({lineHeight})=> lineHeight}px;
  letter-spacing: ${({letterSpacing})=> letterSpacing}px;
`;