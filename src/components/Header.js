import React from "react"
import styled from "styled-components"
import Nav from "./Nav"
import LogoHeader from '../images/shared/logo.svg'


const HeaderStyled = styled.header`
height: 96px;
display: flex;
justify-content: space-between;
align-items: center;
`

const Header = (props) => {

    return(
            <>
                <HeaderStyled>
                        <Nav links = {props.links}/>
                </HeaderStyled>
            </>
    )
}

export default Header