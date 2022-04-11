import React, {useState} from "react";
import styled from 'styled-components'
import ImageMars from '../../images/destination/image-mars.png'
import BackgroundImagePlanets from '../../images/destination/background-destination-desktop.jpg'
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


const Mars = () => {



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
                                <Img  src = {ImageMars}/>    
                        </ContainerImg>

                        <DescPlanet>
                            <PlanetOption>

                                <LiPlanetValue to = '/moon' onClick={() => {changeToMoon()}}>MOON</LiPlanetValue>
                                <LiPlanetValue to = '/mars' onClick={() => {changeToMars()}}>MARS</LiPlanetValue>
                                <LiPlanetValue to = '/europa' onClick={() => {changeToEuropa()}}>EUROPA</LiPlanetValue>
                                <LiPlanetValue to = '/titan' onClick={() => {changeToTitan()}}>TITAN</LiPlanetValue>
                            </PlanetOption>
                            <TitlePlanet>MARS</TitlePlanet>
                            <PlanetSubtitle>
                            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                            </PlanetSubtitle>
                            <hr />
                            <Distances>
                                <div>
                                    <DistanceTitle>AVG DISTANCE</DistanceTitle>
                                    <DistanceNumber>225 MIL. KM</DistanceNumber>
                                </div>

                                <div>
                                    <DistanceTitle>EST. TRAVEL TIME</DistanceTitle>
                                    <DistanceNumber>9 MONTHS</DistanceNumber>
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

export default Mars