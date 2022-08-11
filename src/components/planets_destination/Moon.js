import React, { useState } from 'react';
import ImageMoon from '../../images/destination/image-moon.png';
import Header from '../Header';
import Slide from 'react-reveal/Slide';
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

const Moon = () => {
  const infos = [
    {
      title: '01 pick your destination',
      planetOptions: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
      titlePlanet: 'MOON',
      PlanetSubtitle:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distanceTitle: 'AVG. DISTANCE',
      km: '384,400 km',
      travelTimeTitle: 'EST. TRAVEL TIME',
      travelTime: '3 DAYS',
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
          <Slide left>
            <Title>{title}</Title>
            <Box>
              <PlanetAndDesc>
                <ContainerImg>
                  <Img src={ImageMoon} />
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
          </Slide>
        </div>
      </BackgroundImagePlanetsComponent>
    ),
  );
};

export default Moon;
