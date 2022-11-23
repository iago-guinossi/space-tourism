import styled from "styled-components";

type ContainerProps ={
    url: string;
    urlTablet: string; 
}

export const ContainerBackgroundImage = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({url}) => url});
  background-repeat: no-repeat;
  background-size: 100%;
  box-sizing: border-box;
  margin-top: -136px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  @media(max-width: 768px){
    background-image: url(${({urlTablet}) => urlTablet});
    margin-top: -96px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;