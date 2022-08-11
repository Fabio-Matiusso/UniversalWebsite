import React from 'react';
import Header from '../Header';
import Bounce from 'react-reveal/Bounce';
import ImageAnousheh from '../../images/crew/image-anousheh-ansari.png';
import {
  PageBackground,
  Box,
  TitlePage,
  SpanStyled,
  MeetOurCrew,
  CrewContent,
  PilotDesc,
  Pilot,
  PilotName,
  Description,
  PilotImage,
  Img,
  Slider,
  CircleSlideActive,
  CircleSlide,
} from './StyledComponentsCrew';

const Anousheh = () => {
  const infos = [
    {
      number: 02,
      callToAction: 'meet our crew',
      ocupation: 'Flight Engineer',
      pilotName: 'Anousheh Ansari',
      description:
        'Anoushe Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space',
    },
  ];

  return infos.map(
    ({ number, callToAction, ocupation, pilotName, description }) => (
      <>
        <PageBackground>
          <Header />

          <Bounce left>
            <Box>
              <TitlePage>
                <SpanStyled>{number}</SpanStyled>{' '}
                <MeetOurCrew>{callToAction}</MeetOurCrew>
              </TitlePage>

              <CrewContent>
                <PilotDesc>
                  <Pilot>{ocupation}</Pilot>
                  <PilotName>{pilotName}</PilotName>
                  <Description>{description}</Description>
                </PilotDesc>
              </CrewContent>
              <PilotImage>
                <Img src={ImageAnousheh} />
              </PilotImage>

              <Slider>
                <CircleSlide to="/douglas" />
                <CircleSlide to="/mark" />
                <CircleSlide to="/victor" />
                <CircleSlideActive to="/anousheh" />
              </Slider>
            </Box>
          </Bounce>
        </PageBackground>
      </>
    ),
  );
};

export default Anousheh;
