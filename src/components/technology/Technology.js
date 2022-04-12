import React from "react";
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import { SpanStyled } from "../crewStructure/CrewStructure";
import Header from "../Header";
import BackgroundImage from '../../images/technology/background-technology-desktop.jpg'
import { Link } from "react-router-dom";
import RocketImage from '../../images/technology/image-launch-vehicle-portrait.jpg'
import RocketImageTwo from '../../images/technology/image-launch-vehicle-landscape.jpg'

export const BackgroundImagePage = styled.body`
    width: 100vw;
    height: 200vh;
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`

export const SpaceLaunch = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    text-transform: uppercase;

    @media (max-width: 915px) {
x;
    }

    @media (max-width: 450px) {
        font-size: 22px;
    }
    

`

export const ContainerTechnology = styled.div`
    width: 80%;
    height: 587px;
    display: flex;
    width: 100vw;
    flex-direction: column;

    @media (max-width: 915px) {

    }

    @media (max-width: 590px) {
    }

`

export const TechnologyList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    align-items: flex-end;

    @media (max-width: 915px) {
        flex-direction: row;
    }

    @media (max-width: 320px){

    }
`

const StyledListTechnology = styled.li`
        background-color: #fff;
        color: black;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;

        @media (max-width: 915px){
            width: 60px;
            height: 60px;
            border-radius: 30px;
        }

        @media (max-width: 320px){
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
`

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 400%;

    @media (max-width: 915px) {
        height: 300px;
        width: 80vw;
        flex-direction: column;
        align-items: center;
        align-self: flex-start;
        text-align: center;
        justify-content: space-evenly;
        justify-self: center;
    }

    @media (max-width: 320px){
        width: 80%;
        align-self: flex-start;
    }
    
`

const StyledH3 = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #D0D6F9;
    width: 90%;


    @media (max-width: 915px) {
        font-size: 16px;
    }

    @media (max-width: 320px){
        font-size: 12px;
    }
`

const StyledH1 = styled.h1`
    font-weight: 400;
    font-size: 50px;
    line-height: 64px;
    color: #fff;
    width: 90%;

    @media (max-width: 915px) {
        font-size: 40px;
    }

    @media (max-width: 320px){
        font-size: 30px;
    }
`

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
    width: 90%;

    @media (max-width: 915px) {
        font-size: 16px;
    }
`
const Image = styled.img`
    width: 348px;
    height: 420px;
    align-self: center;
    justify-self: flex-start;

    @media (max-width: 915px){
        display: none;
    }
`

const ImageTwo = styled.img`

    @media (min-width: 915px){
        display: none;
    }

    @media (max-width: 915px) {
        width: 100vw;
        justify-self: center;
    }

    @media (max-width: 450px) {
        height: 350px;
    }

    @media (max-width: 320px) {
        max-width: 100vw;
        height: 150px;
        align-self: center;
    }
`

export const ContainerOfSpan = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;

    @media (max-width: 915px) {
        justify-content: center;
        align-self: center;
        width: 400px;
    }

    
`

const FlexGroupOne = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`

const FlexGroupTwo = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
`

const Technology = () => {
    return(
        <BackgroundImagePage>
            <Header />

            <Zoom left>
                <ContainerTechnology>

                    <FlexGroupOne>
                        <ContainerOfSpan> 
                            <SpanStyled style={{marginLeft: 30}}>03</SpanStyled> <SpaceLaunch>SPACE LAUNCH 101</SpaceLaunch>
                        </ContainerOfSpan>
                    </FlexGroupOne>

                    <FlexGroupTwo>
                        <TechnologyList>
                            <StyledListTechnology>1</StyledListTechnology>
                            <StyledListTechnology>2</StyledListTechnology>
                            <StyledListTechnology>3</StyledListTechnology>
                        </TechnologyList>

                        <ContainerContent>
                            <StyledH3>THE TERMINOLOGY...</StyledH3>
                            <StyledH1>LAUNCH VEHICLE</StyledH1>
                            <StyledDescription>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</StyledDescription>
                        </ContainerContent>

                        <Image src = {RocketImage}/>
                        <ImageTwo src = {RocketImageTwo}/>
                    </FlexGroupTwo>
                </ContainerTechnology>
            </Zoom>
        </BackgroundImagePage>
    )
}

export default Technology