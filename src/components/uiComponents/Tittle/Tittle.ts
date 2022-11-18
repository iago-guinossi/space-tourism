import styled from "styled-components";

type TittleProps = {
    fontSize: number;
    lineHeight: number;
    marginTop: number;
}

export const Tittle = styled.span<TittleProps>`
  font-family: "Bellefair", serif;
  font-size: ${({fontSize})=> fontSize}px;
  color: #ffffff;
  line-height: ${({lineHeight})=> lineHeight}px;
  margin-top: ${({marginTop})=> marginTop}px;
`;