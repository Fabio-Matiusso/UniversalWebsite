import React, { useState } from 'react';
import styled from 'styled-components';
import ImageTitan from '../../images/destination/image-titan.png';
import BackgroundImagePlanets from '../../images/destination/background-destination-desktop.jpg';
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

const Titan = () => {
  const infos = [
    {
      title: '01 pick your destination',
      planetOptions: ['MOON', 'MARS', 'EUROPA', 'TITAN'],
      titlePlanet: 'TITAN',
      PlanetSubtitle:
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
      PlanetSubtitle,
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
                  <PlanetSubtitle>{PlanetSubtitle}</PlanetSubtitle>
                  <hr />
                  <Distances>
                    <div>
                      <DistanceTitle>{distanceTitle}</DistanceTitle>
                      <DistanceNumber>{DistanceNumber}</DistanceNumber>
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

export default Titan;
