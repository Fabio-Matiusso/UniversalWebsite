import React from "react";
import Header from "../Header";
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce';
import BackgroundImage from '../../images/crew/background-crew-desktop.jpg'
import ImageAnousheh from '../../images/crew/image-anousheh-ansari.png'
import { Link } from "react-router-dom";
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



const Anousheh = () => {
    return(
        <>  

        <PageBackground>
            <Header/>


            <Bounce left>
                        
                <Box>
                    <TitlePage>
                        <SpanStyled>02</SpanStyled> <MeetOurCrew>meet our crew</MeetOurCrew>
                    </TitlePage>

                    <CrewContent>
                        <PilotDesc>
                            <Pilot>Flight Engineer</Pilot>
                            <PilotName>Anousheh Ansari</PilotName>
                            <Description>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  </Description>
                        </PilotDesc>

                    </CrewContent>
                        <PilotImage>
                            <Img src = {ImageAnousheh}/>
                        </PilotImage>

                        <Slider>
                            <CircleSlide to = "/douglas" />
                            <CircleSlide to = "/mark" />
                            <CircleSlide to = "/victor" />
                            <CircleSlideActive  to = "/anousheh" />
                        </Slider>
                        
                </Box>
            </Bounce>
            </PageBackground>
        </>
    )
}

export default Anousheh