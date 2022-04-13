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
import Fade from 'react-reveal/Fade';
import Header from "../Header";
import RocketImage from '../../images/technology/image-space-capsule-portrait.jpg'
import RocketImageTwo from '../../images/technology/image-space-capsule-landscape.jpg'

const SpaceCapsule = () => {
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
                        <LinkStyled to = "/spaceport"><LateralLiStyled>2</LateralLiStyled></LinkStyled>
                        <LinkStyled to = "/spacecapsule"><LateralLiStyledActive>3</LateralLiStyledActive></LinkStyled>
                    </LateralUlStyled>

                    <ContainerContent>
                        <Terminology>The terminology</Terminology>
                        <LaunchVehicle>Space capsule</LaunchVehicle>
                        <LaunchVehicleDescription>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</LaunchVehicleDescription>
                    </ContainerContent>

                    <Image src = {RocketImage} />
                    <ImageTwo src = {RocketImageTwo}/>
                </ContainerGrid>
            </Fade>
        </BackgroundImagePage>
    )
}

export default SpaceCapsule