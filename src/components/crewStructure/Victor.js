import React from "react";
import Header from "../Header";
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'
import BackgroundImage from '../../images/crew/background-crew-desktop.jpg'
import ImageVictor from '../../images/crew/image-victor-glover.png'
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import { PageBackground } from "./StyledComponentsCrew";
import { Box } from "./StyledComponentsCrew";
import { TitlePage } from "./StyledComponentsCrew";
import { SpanStyled } from "./StyledComponentsCrew";
import { MeetOurCrew } from "./StyledComponentsCrew";
import { CrewContent } from "./StyledComponentsCrew";
import { PilotDesc } from "./StyledComponentsCrew";
import { Pilot } from "./StyledComponentsCrew";
import { PilotName } from "./StyledComponentsCrew";
import { Description } from "./StyledComponentsCrew";
import { PilotImage } from "./StyledComponentsCrew";
import { Img } from "./StyledComponentsCrew";
import { Slider } from "./StyledComponentsCrew";
import { CircleSlideActive } from "./StyledComponentsCrew";
import { CircleSlide } from "./StyledComponentsCrew";

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


const Victor = () => {
    return(
        <>  

        <PageBackground>
            <Header links={links}/>


            <Bounce left>
                        
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
                            <Img src = {ImageVictor} style = {{marginRight: 40}}/>
                        </PilotImage>

                        <Slider>
                            <CircleSlide to = "/douglas" />
                            <CircleSlide to = "/mark" />
                            <CircleSlideActive to = "/victor" />
                            <CircleSlide  to = "/anousheh" />
                        </Slider>
                        
                </Box>
            </Bounce>
            </PageBackground>
        </>
    )
}

export default Victor