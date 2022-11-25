import styled from "styled-components";
import { useWindowSize } from "../../../hooks/useWindowSize";

type ContainerProps ={
    url: string;
    urlTablet: string;
    urlMobile: string;
    size: any;
}

  const ContainerBackground = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    background-image: url(${({url}) => url});
    background-repeat: no-repeat;
    background-size: ${({size}) => (size.width / size.height) > 1.6 ? '100% auto' : 'auto 100%'};
    background-color: black;
    box-sizing: border-box;
    margin-top: -136px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    @media(max-width: 1000px){
      background-image: url(${({urlTablet}) => urlTablet});
      margin-top: -96px;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-size: ${({size}) => (size.width / size.height) > 0.75 ? '100% auto' : 'auto 100%'};
    }
    @media (max-width: 450px){
      background-image: url(${({urlMobile}) => urlMobile});
      background-size: ${({size}) => (size.width / size.height) > 0.45 ? '100% auto' : 'auto 100%'};
      margin: 0;
      overflow: auto;
    }
    `;

export function ContainerBackgroundImage({url, urlTablet, children, urlMobile}:any){
  
  const size = useWindowSize()
  
  return(
    <ContainerBackground url={url} urlTablet={urlTablet} size={size} urlMobile={urlMobile}>
      {children}
    </ContainerBackground>
  )
}