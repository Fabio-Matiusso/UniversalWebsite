import ImageTitan from '../../images/destination/image-titan.png';
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

const Titan = () => {
  const infos = [
    {
      title: '01 pick your destination',
      planetOptions: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
      titlePlanet: 'TITAN',
      planetSubtitle:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distanceTitle: 'AVG. DISTANCE',
      km: '1.6 BIL. km',
      travelTimeTitle: 'EST. TRAVEL TIME',
      travelTime: '7 YEARS',
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
                  <Img src={ImageTitan} />
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

export default Titan;
