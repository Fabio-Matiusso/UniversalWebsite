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
import Header from '../Header';
import RocketImage from '../../images/technology/image-spaceport-portrait.jpg';
import RocketImageTwo from '../../images/technology/image-spaceport-landscape.jpg';
import Zoom from 'react-reveal/Fade';

const Spaceport = () => {
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

export default Spaceport;
