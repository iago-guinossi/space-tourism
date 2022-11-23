import styled from "styled-components";
import {Link as ReactDomLink} from "react-router-dom";

export const Link = styled(ReactDomLink)`
    text-decoration: none;
    color: #FFFFFF;
    @media (max-width: 450px){
        display: flex;
        flex-direction: row;
    }
`