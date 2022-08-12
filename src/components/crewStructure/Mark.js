import Header from '../Header';
import ImageMark from '../../images/crew/image-mark-shuttleworth.png';
import { Fade } from 'react-reveal';

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

const Mark = () => {
  const [slideActive, setSlideActive] = useState(true);

  const infos = [
    {
      number: '02',
      callToAction: 'meet our crew',
      ocupation: 'Mission Specialist ',
      pilotName: 'mark shuttleworth',
      description:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
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
                <Img src={ImageMark} />
              </PilotImage>

              <Slider>
                {paths.map(({ path }, index) => (
                  <CircleSlide
                    to={path}
                    style={{
                      opacity: index === 1 && slideActive ? '1' : '0.5',
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

export default Mark;
