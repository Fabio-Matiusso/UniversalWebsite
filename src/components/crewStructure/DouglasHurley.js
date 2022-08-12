import Header from '../Header';
import ImageDouglas from '../../images/crew/image-douglas-hurley.png';
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
  CircleSlide,
} from './StyledComponentsCrew';
import { useState } from 'react';

const DouglasHurley = () => {
  const [slideActive, setSlideActive] = useState(true);

  const handleClick = () => {
    setSlideActive(!slideActive);
  };

  const infos = [
    {
      number: '02',
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

          <Fade left duration={500}>
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
                {paths.map(({ path }, index) => (
                  <CircleSlide
                    to={path}
                    onClick={handleClick}
                    style={{
                      opacity: index === 0 && slideActive ? '1' : '0.5',
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

export default DouglasHurley;
