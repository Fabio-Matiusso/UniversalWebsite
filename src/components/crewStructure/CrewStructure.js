import React from "react";
import Header from "../Header";
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import BackgroundImage from '../../images/crew/background-crew-desktop.jpg'
import ImageVictor from '../../images/crew/image-victor-glover.png'
import { Link } from "react-router-dom";


const PageBackground = styled.body`
width: 100vw;
height: 100vh;
background-image: url(${BackgroundImage});

`

const TitlePage = styled.div`
    height: 34px;
    display: flex;
    align-items: center;
    font-size: 28px;
    justify-content: space-around;
    width: 400px;
`

export const SpanStyled = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const MeetOurCrew = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 4.725px;
    color: #FFFFFF;
    text-transform: uppercase;
`

const Box = styled.div`
    width: 80%;
    height: 500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 400px;
`

const CrewContent = styled.div`
    max-width: 100%;
    display: grid;
    grid-column: 1;
    height: 500px;
    grid-row: 2;

`

const PilotDesc = styled.div`
    align-self: center;
`

const PilotImage = styled.div`
    height: 500px;
    grid-column: 2;
    grid-row: 2;
    justify-self: center;
`

const Pilot = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    text-transform: uppercase;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`

const PilotName = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;
    color: #FFFFFF;
`

const Description = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #D0D6F9;
`

const Slider = styled.div`
    width: 132px;
    height: 15px;
    grid-column: 1;
    display: flex;
    justify-content: space-around;
    grid-row: 2;
    align-self: end;
`

const CircleSlide = styled(Link)`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #fff;
    opacity: 0.5;
`

const CircleSlideActive = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #fff;
    cursor: pointer;
`

const CrewStructure = () => {
    return(
        <>  

        <PageBackground>
            <Header/>


            <Zoom left>
                        
                <Box>
                    <TitlePage>
                        <SpanStyled>02</SpanStyled> <MeetOurCrew>meet our crew</MeetOurCrew>
                    </TitlePage>

                    <CrewContent>
                        <PilotDesc>
                            <Pilot>Pilot</Pilot>
                            <PilotName>Victor Glover</PilotName>
                            <Description>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </Description>
                        </PilotDesc>

                    </CrewContent>
                        <PilotImage>
                            <img src = {ImageVictor} style ={{maxHeight: "84%"}}/>
                        </PilotImage>

                        <Slider>
                            <CircleSlide />
                            <CircleSlide />
                            <CircleSlideActive />
                            <CircleSlide />
                        </Slider>
                        
                </Box>
            </Zoom>
            </PageBackground>
        </>
    )
}

export default CrewStructure