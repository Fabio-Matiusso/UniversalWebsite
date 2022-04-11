import React, { useState } from "react";
import styled from 'styled-components'
import ImageMoon from '../../images/destination/image-moon.png'
import Header from "../Header";
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";
import { links } from "../../pages/Destination";
import {BackgroundImagePlanetsComponent} from './StyledComponentsPlanets'
import { ContainerImg } from "./StyledComponentsPlanets";
import { Img } from "./StyledComponentsPlanets";
import { Box } from "./StyledComponentsPlanets";
import { Title } from "./StyledComponentsPlanets";
import { TitlePlanet } from "./StyledComponentsPlanets";
import { PlanetSubtitle } from "./StyledComponentsPlanets";
import { PlanetAndDesc } from "./StyledComponentsPlanets";
import { DescPlanet } from "./StyledComponentsPlanets";
import { PlanetOption } from "./StyledComponentsPlanets";
import { LiPlanetValue } from "./StyledComponentsPlanets";
import { Distances } from "./StyledComponentsPlanets";
import { DistanceTitle } from "./StyledComponentsPlanets";
import { DistanceNumber } from "./StyledComponentsPlanets";


const Moon = () => {



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
                        <ContainerImg>
                                <Img  src = {ImageMoon}/>    
                        </ContainerImg>

                        <DescPlanet>
                            <PlanetOption>

                                <LiPlanetValue to = '/moon' onClick={() => {changeToMoon()}}>MOON</LiPlanetValue>
                                <LiPlanetValue to = '/mars' onClick={() => {changeToMars()}}>MARS</LiPlanetValue>
                                <LiPlanetValue to = '/europa' onClick={() => {changeToEuropa()}}>EUROPA</LiPlanetValue>
                                <LiPlanetValue to = '/titan' onClick={() => {changeToTitan()}}>TITAN</LiPlanetValue>
                            </PlanetOption>
                            <TitlePlanet>moon</TitlePlanet>
                            <PlanetSubtitle>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                            </PlanetSubtitle>
                            <hr />
                            <Distances>
                                <div>
                                    <DistanceTitle>AVG DISTANCE</DistanceTitle>
                                    <DistanceNumber>384,400 KM</DistanceNumber>
                                </div>

                                <div>
                                    <DistanceTitle>EST. TRAVEL TIME</DistanceTitle>
                                    <DistanceNumber>3 DAYS</DistanceNumber>
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

export default Moon