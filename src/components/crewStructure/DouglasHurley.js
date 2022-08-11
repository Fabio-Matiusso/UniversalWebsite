import React from 'react';
import Header from '../Header';
import Bounce from 'react-reveal/Bounce';
import ImageDouglas from '../../images/crew/image-douglas-hurley.png';

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

const DouglasHurley = () => {
  const infos = [
    {
      number: 02,
      callToAction: 'meet our crew',
      ocupation: 'Commander',
      pilotName: 'douglas hurley',
      description:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      paths: [
        { path: '/douglas' },
        { path: '/mark' },
        { path: '/victor' },
        { path: '/anousheh' },
      ],
    },
  ];

  return infos.map(
    ({ number, callToAction, ocupation, pilotName, description, paths }) => (
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
                <Img src={ImageDouglas} />
              </PilotImage>

              <Slider>
                {paths.map(({ path }) => (
                  <CircleSlide to={path} />
                ))}
              </Slider>
            </Box>
          </Bounce>
        </PageBackground>
      </>
    ),
  );
};

export default DouglasHurley;
