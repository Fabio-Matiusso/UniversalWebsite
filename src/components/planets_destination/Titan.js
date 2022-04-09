import React, { useState } from "react";
import styled from 'styled-components'
import ImageTitan from '../../images/destination/image-titan.png'
import BackgroundImagePlanets from '../../images/destination/background-destination-desktop.jpg'
import Header from "../Header";
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";

const links = [
    {
        label: '00 Home',
        path: '/',
    },
    {
        label: '01 destination',
        path: '/destination'
    },
    {
        label: '02 crew',
        path: '/crew'
    },
    {
        label: '03 technology',
        path: '/technology'
    },

]

const BackgroundImagePlanetsComponent = styled.body`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImagePlanets});

`

const Box = styled.div`
    max-width: 80%;
    max-height: 576px;
    display: flex;
    margin: 0 auto;
`

const Title = styled.h1`
    height: 34px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    display: flex;
    margin: 0 auto;
    max-width: 1047px;
    align-self: flex-start;
`

const TitlePlanet = styled.h1`
    font-size: 100px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
`

const PlanetSubtitle = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 32px;
`

const PlanetAndDesc = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const DescPlanet = styled.div`
    width: 445px;
    height: 472px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const PlanetOption = styled.ul`
    display: flex;
    color: #fff;
`

const LiPlanetValue = styled(Link)`
    list-style: none;
    padding: 5px;
    align-self: flex-end;
    text-decoration: none;
    color: #fff;
`

const Distances = styled.div`
    display: flex;
    justify-content: flex-start;
`

const DistanceTitle = styled.p`
    font-size: 14px;
    letter-spacing: 2.36px;
    padding: 10px;
    color: #fff;
`

const DistanceNumber = styled.p`
    font-size: 28px;
    padding: 10px;
    color: #fff;
`


export const Titan = (props) => {

    const changeToMoon = () => {

        console.log("Mudou para lua")

    }

    const changeToMars = () => {

        console.log("Mudou para Mars")
    }

    const changeToEuropa = () => {

        console.log("Mudou para Europa")
    }

    const changeToTitan = () => {

        console.log("Mudou para Titan")
    }
    
    return(
        
        <BackgroundImagePlanetsComponent>
            <Header links={links}/>
            <div style={{maxWidth: "100%"}}>
            <Slide left>
            <Title>01 pick your destination</Title>
                <Box>
                    <PlanetAndDesc>
                        <div style={{margin: "0px 20px"}}>
                            <img  src = {ImageTitan} style = {{width: 400, height: 400, display: "flex", alignItems: "center"}}/>   
                        </div>

                        <DescPlanet style={{margin: "0px 0px 0px 100px"}}>
                            <PlanetOption>
                                <LiPlanetValue to = '/moon' onClick={() => {changeToMoon()}}>MOON</LiPlanetValue>
                                <LiPlanetValue to = '/mars' onClick={() => {changeToMars()}}>MARS</LiPlanetValue>
                                <LiPlanetValue to = '/europa' onClick={() => {changeToEuropa()}}>EUROPA</LiPlanetValue>
                                <LiPlanetValue to = '/titan' onClick={() => {changeToTitan()}}>TITAN</LiPlanetValue>
                            </PlanetOption>
                            <TitlePlanet>TITAN</TitlePlanet>
                            <PlanetSubtitle>
                            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.                            
                            </PlanetSubtitle>
                            <hr />
                            <Distances>
                                <div>
                                    <DistanceTitle>AVG DISTANCE</DistanceTitle>
                                    <DistanceNumber>1.6 BIL. km</DistanceNumber>
                                </div>

                                <div>
                                    <DistanceTitle>EST. TRAVEL TIME</DistanceTitle>
                                    <DistanceNumber>7 YEARS</DistanceNumber>
                                </div>
                            </Distances>
                        </DescPlanet>

                    </PlanetAndDesc>
                </Box>
                
            </Slide>
        </div>
        </BackgroundImagePlanetsComponent>
    )
}

export default Titan