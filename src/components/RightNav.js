import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LiStyled = styled(Link)`
    list-style: none;
    margin: 0px;
    display: flex;
    padding: 15px;
    padding: 25px 0;
    color: #fff;
    text-decoration: none;
    margin: 10px;
    

`
const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        backdrop-filter: blur(81.5485px);
        background: rgba(255, 255, 255, 0.04);
        width: 700px;
        justify-content: center;

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)' } ;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }
`

const RightNav = ({ open }) => {
    return(
        <Ul open = {open}>
            <LiStyled to = "/">00 HOME</LiStyled>
            <LiStyled to = "/destination">01 DESTINATION</LiStyled>
            <LiStyled to = "/crew">02 CREW</LiStyled>
            <LiStyled to = "/technology">03 TECHNOLOGY</LiStyled>
        </Ul>
    )
}

export default RightNav