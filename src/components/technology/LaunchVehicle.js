import { BackgroundImagePage } from "./styledComponents";
import { ContainerGrid } from "./styledComponents";
import { SpaceLaunch } from "./styledComponents";
import { StyledNumberSpaceLaunch } from "./styledComponents";
import { StyledTextSpaceLaunch } from "./styledComponents";
import { LateralUlStyled } from "./styledComponents";
import { LateralLiStyled } from "./styledComponents";
import { LateralLiStyledActive } from "./styledComponents";
import { LinkStyled } from "./styledComponents";
import { ContainerContent } from "./styledComponents";
import { Terminology } from "./styledComponents";
import { LaunchVehicle } from "./styledComponents";
import { LaunchVehicleDescription } from "./styledComponents";
import { Image } from "./styledComponents";
import { ImageTwo } from "./styledComponents";
import Zoom from 'react-reveal/Zoom';
import Header from "../Header";
import RocketImage from '../../images/technology/image-launch-vehicle-portrait.jpg'
import RocketImageTwo from '../../images/technology/image-launch-vehicle-landscape.jpg'


const LaunchVehicleComponent = () => {
    return(
        <BackgroundImagePage>
            <Header />

            <Zoom left>
                <ContainerGrid>
                    <SpaceLaunch>
                        <StyledNumberSpaceLaunch>03</StyledNumberSpaceLaunch>
                        <StyledTextSpaceLaunch>SPACE LAUNCH 101</StyledTextSpaceLaunch>
                    </SpaceLaunch>

                    <LateralUlStyled>
                        <LinkStyled to = "/launchVehicle"><LateralLiStyledActive>1</LateralLiStyledActive></LinkStyled>
                        <LinkStyled to = "/spaceport"><LateralLiStyled>2</LateralLiStyled></LinkStyled>
                        <LinkStyled to = "/spacecapsule"><LateralLiStyled>3</LateralLiStyled></LinkStyled>
                    </LateralUlStyled>

                    <ContainerContent>
                        <Terminology>The terminology</Terminology>
                        <LaunchVehicle>Launch vehicle</LaunchVehicle>
                        <LaunchVehicleDescription>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</LaunchVehicleDescription>
                    </ContainerContent>

                    <Image src = {RocketImage} />
                    <ImageTwo src = {RocketImageTwo}/>
                </ContainerGrid>
            </Zoom>
        </BackgroundImagePage>
    )
}

export default LaunchVehicleComponent