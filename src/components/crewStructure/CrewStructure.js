import React from 'react';
import Header from '../Header';
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

const CrewStructure = () => {
  const infos = [
    {
      number: 02,
      callToAction: 'meet our crew',
      ocupation: 'pilot',
      pilotName: 'Victor Glover',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
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

export default CrewStructure;
