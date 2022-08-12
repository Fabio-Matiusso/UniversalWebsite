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
import Header from '../Header';
import RocketImage from '../../images/technology/image-spaceport-portrait.jpg';
import RocketImageTwo from '../../images/technology/image-spaceport-landscape.jpg';
import Zoom from 'react-reveal/Fade';
import { useState } from 'react';

const Spaceport = () => {
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
      name: 'SPACEPORT',
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
  ];

  return infos.map(
    ({ number, title, paths, terminology, name, description }) => (
      <BackgroundImagePage>
        <Header />

        <Zoom left duration={600}>
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
                        index === 2 && background ? 'white' : 'transparent',
                      color: index === 2 && background ? 'black' : 'white',
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

export default Spaceport;
