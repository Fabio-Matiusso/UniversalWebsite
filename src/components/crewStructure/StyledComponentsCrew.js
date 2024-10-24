import styled from 'styled-components';
import BackgroundImage from '../../images/crew/background-crew-desktop.jpg';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
    width: 60%;
    justify-content: center;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
    width: 40%;
    justify-self: center;
  }
`;

export const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitlePage = styled.div`
  font-size: 28px;
  width: 400px;

  @media (max-width: 930px) {
    max-width: 520px;
    grid-column: 1 / -1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
    text-align: center;
  }

  @media (max-width: 560px) {
    margin-left: 40px;
  }
`;

export const SpanStyled = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  border: 1px solid #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 400px) {
    font-size: 24px;
  }

  @media (max-width: 330px) {
    margin: 0 auto;
    width: 60%;
    font-size: 18px;
  }
`;

export const MeetOurCrew = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  text-transform: uppercase;

  @media (max-width: 560px) {
    padding: 0px 45px 0px 0px;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
    width: 80%;
    font-size: 31px;
  }

  @media (max-width: 400px) {
    margin: 0 auto;
    width: 80%;
    font-size: 24px;
  }

  @media (max-width: 370px) {
    margin: 0 auto;
    width: 70%;
  }

  @media (max-width: 330px) {
    margin: 0 auto;
    width: 60%;
    font-size: 18px;
  }
`;

export const CrewContent = styled.div`
  max-width: 100%;
  display: grid;
  grid-column: 1;
  grid-row: 2;

  @media (max-width: 930px) {
    grid-column: 1 /-1;
    max-width: 520px;
    align-self: flex-start;
    justify-self: center;
    text-align: center;
  }

  @media (max-width: 820px) {
  }

  @media (max-width: 680px) {
  }

  @media (max-width: 560px) {
    grid-column: 1 /-1;
    max-width: 520px;
    align-self: flex-start;
    justify-self: center;
    text-align: center;
  }
`;

export const PilotDesc = styled.div`
  width: 80%;

  @media (max-width: 930px) {
    grid-row: 1;
    grid-column: 1 / -1;
    width: 90%;
    height: 90%;
    justify-self: center;
    row-gap: 20px;
  }

  @media (max-width: 560px) {
    grid-row: 1;
    grid-column: 1 / -1;
    width: 95%;
    height: 80%;
    justify-self: center;
    row-gap: 20px;
  }
`;

export const PilotImage = styled.div`
  height: 500px;
  grid-column: 2;
  grid-row: 2;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 80px;

  @media (max-width: 930px) {
    grid-row: 3;
    grid-column: 1 / -1;
    align-self: end;
  }

  @media (max-width: 560px) {
    padding: 20px;
    width: 250px;
    justify-self: center;
  }
`;

export const Pilot = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin: 10px;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const PilotName = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: #ffffff;

  @media (max-width: 930px) {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    text-align: center;
    text-transform: uppercase;
  }

  @media (max-width: 450px) {
    margin: 0 auto;
    width: 80%;
    font-size: 28px;
  }

  @media (max-width: 400px) {
    margin: 0 auto;
    width: 80%;
    font-size: 24px;
  }

  @media (max-width: 370px) {
    margin: 0 auto;
    width: 70%;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;

  @media (max-width: 450px) {
    margin: 0 auto;
    width: 80%;
    font-size: 20px;
  }

  @media (max-width: 400px) {
    margin: 0 auto;
    width: 80%;
    font-size: 16px;
  }

  @media (max-width: 370px) {
    margin: 0 auto;
    width: 70%;
    font-size: 15px;
  }

  @media (max-width: 330px) {
    margin: 0 auto;
    width: 60%;
    font-size: 14px;
  }
`;

export const Slider = styled.div`
  max-width: 150px;
  grid-column: 1;
  display: grid;
  justify-content: space-around;
  grid-row: 2;
  align-self: end;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 930px) {
    gap: 20px;
    grid-row: 3;
    grid-column: 1 / -1;
    max-width: 520px;
    justify-self: center;
    text-align: center;
    align-self: start;
  }

  @media (max-width: 560px) {
    grid-column: 1 /-1;
    width: 200px;
    align-self: flex-start;
    justify-items: center;
    margin: 0 auto;
  }
`;

export const CircleSlide = styled(Link)`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: #fff;
  opacity: 0.5;

  @media (max-width: 330px) {
    margin-top: 10px;
  }
`;

export const Img = styled.img`
  width: 400px;
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 930px) {
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    grid-row: 1;
    justify-self: flex-end;
  }
`;
