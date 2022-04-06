import React from "react"
import styled from "styled-components"
import Nav from "./Nav"
import LogoHeader from '../images/shared/logo.svg'

const HeaderStyled = styled.header`
/*
padding-left: 5%;
padding-right: 5%; */
/* width: 90%; */
height: 96px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;

`

const Header = (props) => {
    return(
            <>
                <HeaderStyled>
                    <div style={{marginLeft: 40}}>
                        <img src = {LogoHeader}/>
                    </div>
                    <div>
                        <Nav links = {props.links}/>
                    </div>
                </HeaderStyled>
            </>
    )
}

export default Header