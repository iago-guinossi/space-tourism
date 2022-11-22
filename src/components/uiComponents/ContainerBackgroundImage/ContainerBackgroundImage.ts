import styled from "styled-components";

type ContainerProps ={
    url: string;
}

export const ContainerBackgroundImage = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({url}) => url});
  box-sizing: border-box;
  margin-top: -136px;
  display:flex;
  flex-direction: row;
`;