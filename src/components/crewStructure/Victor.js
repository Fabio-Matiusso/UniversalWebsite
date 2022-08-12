import Header from '../Header';
import ImageVictor from '../../images/crew/image-victor-glover.png';
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
import { useState } from 'react';
import { Fade } from 'react-reveal';

const Victor = () => {
  const [slideActive, setSlideActive] = useState(true);

  const infos = [
    {
      number: '02',
      callToAction: 'meet our crew',
      ocupation: 'pilot',
      pilotName: 'Victor Glover',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
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

          <Fade bottom duration={500}>
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
                <Img src={ImageVictor} />
              </PilotImage>

              <Slider>
                {paths.map(({ path }, index) => (
                  <CircleSlide
                    to={path}
                    style={{
                      opacity: index === 2 && slideActive ? '1' : '0.5',
                    }}
                  />
                ))}
              </Slider>
            </Box>
          </Fade>
        </PageBackground>
      </>
    ),
  );
};

export default Victor;
