import React, {useState} from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import RightNav from "./RightNav";
import Burger from './Burger'
import NavLogo from '../images/shared/logo.svg'

const NavStyled = styled.nav`
    padding: 0 20px;
    display: flex;
    color: white;
    list-style: none;
    margin: 0px;
    padding: 0px;
    height: 60px;
    align-items: center;
    width: 1500px;
    justify-content: space-between;
    z-index: 999;


    .logo{
        padding: 15px 0;
    }

`


const Nav = (props) => {
    const {links} = props


    return(

            <NavStyled>

                <div  className="logo">
                    <img src = {NavLogo} />
                </div>
                <Burger />
                
            </NavStyled>
    )
}

export default Nav