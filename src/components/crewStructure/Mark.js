import React from "react";
import Header from "../Header";
import ImageMark from '../../images/crew/image-mark-shuttleworth.png'
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



const Mark = () => {
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
                            <Pilot>Mission Specialist  </Pilot>
                            <PilotName>MARK SHUTTLEWORTH</PilotName>
                            <Description>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</Description>
                        </PilotDesc>

                    </CrewContent>
                        <PilotImage>
                            <Img src = {ImageMark}/>
                        </PilotImage>

                        <Slider>
                            <CircleSlide to = "/douglas" />
                            <CircleSlideActive to = "/mark"/>
                            <CircleSlide to = "/victor" />
                            <CircleSlide  to = "/anousheh" />
                        </Slider>
                        
                </Box>
            </Bounce>
            </PageBackground>
        </>
    )
}

export default Mark