import styled from "styled-components";

type ContainerProps ={
    url: string;
}

export const ContainerBackgroundImage = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({url}) => url});
  margin-top: -136px;
  box-sizing: border-box;
  padding-bottom: 131px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;