import React from "react";
import Header from "../Header";
import ImageDouglas from '../../images/crew/image-douglas-hurley.png'
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



const DouglasHurley = () => {
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
                            <Pilot>Commander </Pilot>
                            <PilotName>Douglas Hurley</PilotName>
                            <Description>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</Description>
                        </PilotDesc>

                    </CrewContent>
                            <PilotImage>
                                <Img src = {ImageDouglas}/>
                            </PilotImage>

                                <Slider>
                                    <CircleSlideActive to = "/douglas"/>
                                    <CircleSlide to ="/mark"/>
                                    <CircleSlide to = "/victor" />
                                    <CircleSlide to = "/anousheh" />
                                </Slider>
                        
                </Box>
            </Bounce>
            </PageBackground>
        </>
    )
}

export default DouglasHurley