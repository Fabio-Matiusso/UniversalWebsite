import ImageMars from '../../images/destination/image-mars.png';
import Header from '../Header';
import { links } from '../../pages/Destination';
import {
  BackgroundImagePlanetsComponent,
  ContainerImg,
  Img,
  Box,
  Title,
  TitlePlanet,
  PlanetSubtitle,
  PlanetAndDesc,
  DescPlanet,
  PlanetOption,
  LiPlanetValue,
  Distances,
  DistanceTitle,
  DistanceNumber,
} from './StyledComponentsPlanets';
import { Fade } from 'react-reveal';

const Mars = () => {
  const infos = [
    {
      title: '01 pick your destination',
      planetOptions: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
      titlePlanet: 'MARS',
      planetSubtitle:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distanceTitle: 'AVG. DISTANCE',
      km: '225 MIL. km',
      travelTimeTitle: 'EST. TRAVEL TIME',
      travelTime: '9 months',
    },
  ];

  return infos.map(
    ({
      title,
      planetOptions,
      titlePlanet,
      planetSubtitle,
      distanceTitle,
      km,
      travelTimeTitle,
      travelTime,
    }) => (
      <BackgroundImagePlanetsComponent>
        <Header links={links} />
        <div style={{ maxWidth: '100%' }}>
          <Fade right duration={900}>
            <Title>{title}</Title>
            <Box>
              <PlanetAndDesc>
                <ContainerImg>
                  <Img src={ImageMars} />
                </ContainerImg>

                <DescPlanet>
                  <PlanetOption>
                    {planetOptions.map((planet) => (
                      <>
                        <LiPlanetValue to={`/${planet.toLowerCase()}`}>
                          {planet}
                        </LiPlanetValue>
                      </>
                    ))}
                  </PlanetOption>
                  <TitlePlanet>{titlePlanet}</TitlePlanet>
                  <PlanetSubtitle>{planetSubtitle}</PlanetSubtitle>
                  <hr />
                  <Distances>
                    <div>
                      <DistanceTitle>{distanceTitle}</DistanceTitle>
                      <DistanceNumber>{km}</DistanceNumber>
                    </div>

                    <div>
                      <DistanceTitle>{travelTimeTitle}</DistanceTitle>
                      <DistanceNumber>{travelTime}</DistanceNumber>
                    </div>
                  </Distances>
                </DescPlanet>
              </PlanetAndDesc>
            </Box>
          </Fade>
        </div>
      </BackgroundImagePlanetsComponent>
    ),
  );
};

export default Mars;
