import styled from "styled-components";
import { Button } from "../uiComponents/Button";
import { Link } from "../uiComponents/Link";

const SubContainerNavegation = styled.div`
  width: 1385px;
  height: 96px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  margin-top: 40px;
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
`;

export function NavBar() {
  return (
    <SubContainerNavegation>
      <Logo src="/assets/logo.svg" />
      <ContainerTransparentNavegation>
        <Button>
          <Link to={"/space-tourism/"}>
            <b>00</b> HOME
          </Link>
        </Button>
        <Button>
          <Link to={"destination/moon"}>
            <b>01</b> DESTINATION
          </Link>
        </Button>
        <Button>
          <Link to={"crew"}>
            <b>02</b> CREW
          </Link>
        </Button>
        <Button>
          <Link to={"technology"}>
            <b>03</b> TECHNOLOGY{" "}
          </Link>
        </Button>
      </ContainerTransparentNavegation>
      <Rectangle />
    </SubContainerNavegation>
  );
}
