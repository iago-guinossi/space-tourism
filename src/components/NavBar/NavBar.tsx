import styled from "styled-components";
import { Button } from "../uiComponents/Button";
import { Link } from "../uiComponents/Link";
import imgLogo from '../../assets/logo.svg'

const SubContainerNavegation = styled.div`
  width: 1385px;
  height: 96px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  padding-top: 40px;
  @media(max-width: 768px){
    width: 729px;
    padding-top: 0;
  }
    
`;

const ContainerTransparentNavegation = styled.div`
  margin-left: auto;
  width: 830px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(40.7742px);
  @media(max-width: 768px){
    width: 450px;
    justify-content: space-around;
    padding: 0 48px;
    box-sizing: border-box;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
`;

const Rectangle = styled.div`
  position: absolute;
  width: 473px;
  height: 1px;
  margin-left: 111px;
  background-color: #ffffff;
  opacity: 0.25;
  @media(max-width: 768px){
    display:none;
  }
`;

const NumberButton = styled.b`
@media (max-width: 768px){
  display: none;
}`

export function NavBar() {
  return (
    <SubContainerNavegation>
      <Logo src={imgLogo} />
      <ContainerTransparentNavegation>
        <Button>
          <Link to={"/space-tourism/"}>
            <NumberButton>00</NumberButton> HOME
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/destination/moon"}>
            <NumberButton>01</NumberButton> DESTINATION
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/crew"}>
            <NumberButton>02</NumberButton> CREW
          </Link>
        </Button>
        <Button>
          <Link to={"/space-tourism/technology"}>
            <NumberButton>03</NumberButton> TECHNOLOGY
          </Link>
        </Button>
      </ContainerTransparentNavegation>
      <Rectangle />
    </SubContainerNavegation>
  );
}
