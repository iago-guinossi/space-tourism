import styled from "styled-components"

const ContainerNavegation = styled.div`
    width: 1385px;
    height: 96px;
    margin: 0 0 0 auto ;
    background-color: red;
    display:flex;
    align-items: center;
    position: relative;
`

const ContainerTransparentNavegation = styled.div`
margin-left: auto;
    width: 830px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerButtonNavegation = styled.div`
    justify-content: space-around;
`

const Button = styled.button`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    background-color: transparent;
    border: none;
`

const Logo = styled.img`
width:48px;
height: 48px;
`

const Rectangle = styled.div`
position: absolute;
width: 473px;
height: 1px;
margin-left: 111px;
background-color: #FFFFFF;
`

export function NavBar(){
    return(
        <ContainerNavegation>
            <Logo src="src/assets/logo.svg"/>
            <Rectangle/>
            <ContainerTransparentNavegation>
                <Button><b>00</b> HOME</Button>
                <Button><b>01</b> DESTINATION</Button>
                <Button><b>02</b> CREW</Button>
                <Button><b>03</b> TECHNOLOGY</Button>
            </ContainerTransparentNavegation>
        </ContainerNavegation>
    )
}