import {
  BackgroundImagePage,
  ContainerGrid,
  SpaceLaunch,
  StyledNumberSpaceLaunch,
  StyledTextSpaceLaunch,
  LateralUlStyled,
  Image,
  LateralLiStyled,
  LinkStyled,
  ContainerContent,
  Terminology,
  LaunchVehicle,
  LaunchVehicleDescription,
  ImageTwo,
} from './styledComponents';
import Zoom from 'react-reveal/Zoom';
import Header from '../Header';
import RocketImage from '../../images/technology/image-space-capsule-portrait.jpg';
import RocketImageTwo from '../../images/technology/image-space-capsule-landscape.jpg';
import { useState } from 'react';

const SpaceCapsule = () => {
  const [background, setBackground] = useState(true);

  const infos = [
    {
      number: '03',
      title: 'SPACE LAUNCH 101',
      paths: [
        { path: '/launchvehicle', index: 1 },
        { path: '/spaceport', index: 2 },
        { path: '/spacecapsule', index: 3 },
      ],
      terminology: 'The Terminology',
      name: 'SPACE CAPSULE',
      description:
        'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth`s atmosphere without wings. Our capsule is where you`ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    },
  ];

  return infos.map(
    ({ number, title, paths, terminology, name, description }) => (
      <BackgroundImagePage>
        <Header />

        <Zoom left duration={700}>
          <ContainerGrid>
            <SpaceLaunch>
              <StyledNumberSpaceLaunch>{number}</StyledNumberSpaceLaunch>
              <StyledTextSpaceLaunch>{title}</StyledTextSpaceLaunch>
            </SpaceLaunch>

            <LateralUlStyled>
              {paths.map(({ path, index }) => (
                <LinkStyled to={path}>
                  <LateralLiStyled
                    style={{
                      background:
                        index === 3 && background ? 'white' : 'transparent',
                      color: index === 3 && background ? 'black' : 'white',
                    }}
                  >
                    {index}
                  </LateralLiStyled>
                </LinkStyled>
              ))}
            </LateralUlStyled>

            <ContainerContent>
              <Terminology>{terminology}</Terminology>
              <LaunchVehicle>{name}</LaunchVehicle>
              <LaunchVehicleDescription>{description}</LaunchVehicleDescription>
            </ContainerContent>

            <Image src={RocketImage} />
            <ImageTwo src={RocketImageTwo} />
          </ContainerGrid>
        </Zoom>
      </BackgroundImagePage>
    ),
  );
};

export default SpaceCapsule;
