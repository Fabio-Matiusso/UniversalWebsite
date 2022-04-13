import React from "react";
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Header from "../Header";
import BackgroundImage from '../../images/technology/background-technology-desktop.jpg'
import { Link } from "react-router-dom";
import RocketImage from '../../images/technology/image-launch-vehicle-portrait.jpg'
import RocketImageTwo from '../../images/technology/image-launch-vehicle-landscape.jpg'

export const BackgroundImagePage = styled.body`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    overflow: hidden;
    background-size: cover;
    background-position: top right;
    @media (max-width: 920px) {
    }
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
        grid-template-rows: 80px 370px 120px 430px;
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
`

export const StyledNumberSpaceLaunch = styled.span`
    color: #FFF;
    opacity: 0.25;
    font-size: 28px;
    letter-spacing: 4.725px;
`

export const StyledTextSpaceLaunch = styled.span`
    color: #FFF;
    font-size: 28px;
    letter-spacing: 4.725px;
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
`

export const LateralLiStyled = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #FFF;
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
`

export const LaunchVehicleDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
`

const Image = styled.img`
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

const ImageTwo = styled.img`
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
    }
`

const Technology = () => {
    return(
        <BackgroundImagePage>
            <Header />

            <Zoom left>
                <ContainerGrid>
                    <SpaceLaunch>
                        <StyledNumberSpaceLaunch>03</StyledNumberSpaceLaunch>
                        <StyledTextSpaceLaunch>SPACE LAUNCH 101</StyledTextSpaceLaunch>
                    </SpaceLaunch>

                    <LateralUlStyled>
                        <LateralLiStyled>1</LateralLiStyled>
                        <LateralLiStyled>2</LateralLiStyled>
                        <LateralLiStyled>3</LateralLiStyled>
                    </LateralUlStyled>

                    <ContainerContent>
                        <Terminology>The terminology</Terminology>
                        <LaunchVehicle>Launch vehicle</LaunchVehicle>
                        <LaunchVehicleDescription>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</LaunchVehicleDescription>
                    </ContainerContent>

                    <Image src = {RocketImage} />
                    <ImageTwo src = {RocketImageTwo}/>
                </ContainerGrid>
            </Zoom>
        </BackgroundImagePage>
    )
}

export default Technology