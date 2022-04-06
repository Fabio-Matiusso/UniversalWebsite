import React from "react";
import Fade from 'react-reveal/Fade'
import styled from "styled-components";

const SuperTitle = styled.p`
    font-size: 28px;
    text-transform: uppercase;
    color: white;
`

const Space = styled.h1`
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    color: white;
`

const Description = styled.p`
    font-size: 18px;
    line-height: 32px;
    color: white;
`

const Container = styled.div`
    max-width: 1110px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
`

const DivContent = styled.div`
    max-width: 444px;
    height: 382px;
`

const DivButton = styled.div`
    width: 274px;
    height: 272px;
    color: white;
    border-radius: 137px;
    color: black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 2px;
    line-height: 37px;
`

const HomeElements = () => {
    return(
        <Container>
            <Fade left>
                <DivContent>
                    <SuperTitle>So, you want to travel to</SuperTitle>
                    <Space>SPACE</Space>
                    <Description>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Description>
                </DivContent>

                <DivButton>EXPLORE</DivButton>
            </Fade>
        </Container>
    )
}

export default HomeElements