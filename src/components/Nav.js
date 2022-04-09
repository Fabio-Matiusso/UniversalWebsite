import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";


const NavStyled = styled.nav`
    list-style: none;
    margin: 0px;
    padding: 0px;
    backdrop-filter: blur(81.5485px);
    background: rgba(255, 255, 255, 0.04);
    max-width: 830px;
    height: 60px;
    display: flex;
    align-items: center;
    width: 750px;
    justify-content: space-evenly;
`

const UlStyled = styled.ul`
    display: flex;
    margin-left: 100px;
    margin-right: 100px;
`

const LiStyled = styled(Link)`
    list-style: none;
    margin: 0px;
    display: flex;
    padding: 15px;
    padding: 25px 0;
    color: #fff;
    text-decoration: none;

`


const Nav = (props) => {

    const {links} = props

    return(
                <NavStyled>
                        <UlStyled>
                                <LiStyled links = {links}>
                                    {links.map(link => (
                                        <div style = {{marginLeft: 20, marginRight: 20}}>
                                            <li><LiStyled to = {link.path} >{link.label.toUpperCase()}</LiStyled></li>
                                        </div>
                                    ))}
                                </LiStyled>
                        </UlStyled>
                </NavStyled>
    )
}

export default Nav