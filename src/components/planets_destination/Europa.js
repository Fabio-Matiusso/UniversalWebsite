import React, {useState} from "react";
import ImageEuropa from '../../images/destination/image-europa.png'
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



const Europa = () => {



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
                                <Img  src = {ImageEuropa}/>    
                        </ContainerImg>

                        <DescPlanet>
                            <PlanetOption>

                                <LiPlanetValue to = '/moon' onClick={() => {changeToMoon()}}>MOON</LiPlanetValue>
                                <LiPlanetValue to = '/mars' onClick={() => {changeToMars()}}>MARS</LiPlanetValue>
                                <LiPlanetValue to = '/europa' onClick={() => {changeToEuropa()}}>EUROPA</LiPlanetValue>
                                <LiPlanetValue to = '/titan' onClick={() => {changeToTitan()}}>TITAN</LiPlanetValue>
                            </PlanetOption>
                            <TitlePlanet>EUROPA</TitlePlanet>
                            <PlanetSubtitle>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover???s dream. With an icy surface, it???s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                            </PlanetSubtitle>
                            <hr />
                            <Distances>
                                <div>
                                    <DistanceTitle>AVG DISTANCE</DistanceTitle>
                                    <DistanceNumber>628 MIL. KM</DistanceNumber>
                                </div>

                                <div>
                                    <DistanceTitle>EST. TRAVEL TIME</DistanceTitle>
                                    <DistanceNumber>3 YEARS</DistanceNumber>
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

export default Europa