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
import Header from "../Header";
import RocketImage from '../../images/technology/image-spaceport-portrait.jpg'
import RocketImageTwo from '../../images/technology/image-spaceport-landscape.jpg'
import Fade from 'react-reveal/Fade';

const Spaceport = () => {
    return(
        <BackgroundImagePage>
            <Header />

            <Fade left>
                <ContainerGrid>
                    <SpaceLaunch>
                        <StyledNumberSpaceLaunch>03</StyledNumberSpaceLaunch>
                        <StyledTextSpaceLaunch>SPACE LAUNCH 101</StyledTextSpaceLaunch>
                    </SpaceLaunch>

                    <LateralUlStyled>
                        <LinkStyled to = "/launchVehicle"><LateralLiStyled>1</LateralLiStyled></LinkStyled>
                        <LinkStyled to = "/spaceport"><LateralLiStyledActive>2</LateralLiStyledActive></LinkStyled>
                        <LinkStyled to = "/spacecapsule"><LateralLiStyled>3</LateralLiStyled></LinkStyled>
                    </LateralUlStyled>

                    <ContainerContent>
                        <Terminology>The terminology</Terminology>
                        <LaunchVehicle>spaceport</LaunchVehicle>
                        <LaunchVehicleDescription>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</LaunchVehicleDescription>
                    </ContainerContent>

                    <Image src = {RocketImage} />
                    <ImageTwo src = {RocketImageTwo}/>
                </ContainerGrid>
            </Fade>
        </BackgroundImagePage>
    )
}

export default Spaceport