import styled from 'styled-components'
import BackgroundImage from '../../images/technology/background-technology-desktop.jpg'
import { Link } from 'react-router-dom'

export const BackgroundImagePage = styled.body`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
    background-size: cover;
    background-position: top right;
`

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-rows: 150px 300px 200px;

    @media (max-width: 920px) {
        grid-template-columns: auto;
        grid-template-rows: 150px 350px 150px 400px;
    }

    @media (max-width: 820px){
        grid-template-rows: 150px 330px 120px 300px;
    }

    @media (max-width: 720px){
        grid-template-rows: 150px 330px 115px 330px;

    }

    @media (max-width: 570px){
        grid-template-rows: 120px 300px 110px 350px;

    }

    @media (max-width: 540px){
        grid-template-rows: 100px 250px 150px 400px;

    }
    @media (max-width: 500px){
        grid-template-rows: 90px 300px 130px 410px;
    }

    @media (max-width: 400px){
        grid-template-rows: 80px 590px;
    }
    
    @media (max-width: 370px){
        grid-template-rows: 80px 600px;
    }

`

export const SpaceLaunch = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-evenly;
    grid-row: 1;
    grid-column: 2;
    justify-self: left;
    align-self: center;

    @media (max-width: 920px) {
        grid-column: 1;
        grid-row: 1;
        justify-self: center;
        align-self: center;
    }

    @media (max-width: 400px) {
        width: 80%;
        text-align: center;
        flex-direction: column;
    }
`

export const StyledNumberSpaceLaunch = styled.span`
    color: #FFF;
    opacity: 0.25;
    font-size: 28px;
    letter-spacing: 4.725px;

    @media (max-width: 400px) {
        font-size: 24px;
    }

    @media (max-width: 360px){
        font-size: 22px;
    }
`

export const StyledTextSpaceLaunch = styled.span`
    color: #FFF;
    font-size: 28px;
    letter-spacing: 4.725px;

    @media (max-width: 400px) {
        font-size: 24px;
    }

    @media (max-width: 360px){
        font-size: 22px;
    }
`

export const LateralUlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    grid-row: 2;
    grid-column: 2;
    justify-self: flex-start;
    justify-content: space-evenly;

    @media (max-width: 920px) {
        grid-row: 3;
        grid-column: 1;
        flex-direction: row;
        justify-self: center;
        align-self: center;
        justify-content: space-evenly;
        width: 50%;
    }

    @media (max-width: 550px){
        width: 70%;
    }

    @media (max-width: 400px){
        grid-row: 2;
        align-self: flex-start;
    }

    @media (max-width: 360px){
        width: 80%;
    }
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #000;
`

export const LateralLiStyledActive = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #FFF;

    @media (max-width: 360px){
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
`

export const LateralLiStyled = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: transparent;
    color: #FFF;
    border: 1px solid #fff;

    @media (max-width: 360px){
        width: 70px;
        height: 70px;
        border-radius: 35px;
    }
`

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-row: 2;
    grid-column: 2;
    width: 80%;
    justify-self: flex-end;

    @media (max-width: 920px) {
        grid-column: 1;
        grid-row: 4;
        align-items: center;
        text-align: center;
        justify-self: center;
        width: 60%;
    }

    @media (max-width: 720px){
        width: 80%;
    }

    @media (max-width: 400px){
        grid-row: 2;
        align-self: center;
        width: 70%;
    }
`

export const Terminology = styled.h2`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    font-weight: 400;
    text-transform: uppercase;
    color: #D0D6F9;
`

export const LaunchVehicle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    color: #FFF;
    text-transform: uppercase;

    @media (max-width: 360px){
        font-size: 40px;
    }
`

export const LaunchVehicleDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;

    @media (max-width: 360px){
        font-size: 14px;
    }
`

export const Image = styled.img`
    width: 348px;
    height: 420px;
    align-self: center;
    justify-self: flex-end;
    grid-row: 2;
    grid-column: 3;
    @media (max-width: 915px){
        display: none;
    }
`

export const ImageTwo = styled.img`
    @media (min-width: 920px){
        display: none;
    }
    @media (max-width: 920px) {
        width: 100%;
        justify-self: center;
        grid-column: 1;
    }
    @media (max-width: 720px){
        height: 80%;
        position: static;
    }

    @media (max-width: 400px){
        display: none;
    }
`