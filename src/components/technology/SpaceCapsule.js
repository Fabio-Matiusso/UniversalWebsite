import {
  BackgroundImagePage,
  ContainerGrid,
  SpaceLaunch,
  StyledNumberSpaceLaunch,
  StyledTextSpaceLaunch,
  LateralUlStyled,
  LateralLiStyled,
  LateralLiStyledActive,
  LinkStyled,
  ContainerContent,
  Terminology,
  LaunchVehicle,
  LaunchVehicleDescription,
  ImageTwo,
} from './styledComponents';
import Fade from 'react-reveal/Fade';
import Header from '../Header';
import RocketImage from '../../images/technology/image-space-capsule-portrait.jpg';
import RocketImageTwo from '../../images/technology/image-space-capsule-landscape.jpg';

const SpaceCapsule = () => {
  const infos = [
    {
      number: 03,
      title: 'SPACE LAUNCH 101',
      paths: [
        { path: '/launchVehicle', index: 1 },
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

        <Zoom left>
          <ContainerGrid>
            <SpaceLaunch>
              <StyledNumberSpaceLaunch>{number}</StyledNumberSpaceLaunch>
              <StyledTextSpaceLaunch>{title}</StyledTextSpaceLaunch>
            </SpaceLaunch>

            {paths.map(({ path, index }) => (
              <LateralUlStyled>
                <LinkStyled to={path}>
                  <LateralLiStyledActive>{index}</LateralLiStyledActive>
                </LinkStyled>
              </LateralUlStyled>
            ))}

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
