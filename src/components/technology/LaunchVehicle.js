import { Image } from './styledComponents';
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
import Zoom from 'react-reveal/Zoom';
import Header from '../Header';
import RocketImage from '../../images/technology/image-launch-vehicle-portrait.jpg';
import RocketImageTwo from '../../images/technology/image-launch-vehicle-landscape.jpg';

const LaunchVehicleComponent = () => {
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
      name: 'LAUNCH VEHICLE',
      description:
        'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth`s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it`s quite an awe-inspiring sight on the launch pad!',
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

            <LateralUlStyled>
              {paths.map(({ path, index }) => (
                <LinkStyled to={path}>
                  <LateralLiStyled>{index}</LateralLiStyled>
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

export default LaunchVehicleComponent;
