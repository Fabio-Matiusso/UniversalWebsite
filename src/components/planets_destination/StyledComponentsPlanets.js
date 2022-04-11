import BackgroundImagePlanets from '../../images/destination/background-destination-desktop.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const BackgroundImagePlanetsComponent = styled.body`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImagePlanets});
    background-repeat: no-repeat;
    background-size: cover;

`

export const ContainerImg = styled.div`
     /* margin: 0px 60px; */
     display: flex;
     width: 800px;


     @media (max-width: 930px) {
        display: flex;
        justify-content: center;
    }

    
`

export const Img = styled.img`
    width: 400px;
    height: 400px; 
    display: flex;
    align-items:center;

    @media (max-width: 930px) {
        width: 200px;
        height: 200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 480px) {
        margin-top: 20px;
        font-size: 16px;
        margin: 10px auto 0px auto;
        padding: 3px;
    }

    @media (max-width: 380px) {
        margin-top: 20px;
        font-size: 16px;
        margin: 25px auto 0px auto;
        padding: 5px;
    }
`

export const Box = styled.div`
    display: flex;
    max-width: 80%;
    max-height: 576px;
    display: flex;
    margin: 0 auto;
`

export const Title = styled.h1`
    height: 34px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    display: flex;
    margin: 0 auto;
    max-width: 1047px;
    align-self: flex-start;

    @media (max-width: 930px) {
        font-size: 28px;
        text-align: center;
        justify-content: center;
    }

    @media (max-width: 400px) {
        font-size: 24px;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 380px) {
        font-size: 20px;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 320px) {
        font-size: 16px;
        width: 80%;
        margin: 0 auto;
    }
`

export const TitlePlanet = styled.h1`
    font-size: 100px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;

    @media (max-width: 930px) {
        font-size: 80px;
        text-align: center;
    }

    @media (max-width: 480px) {
        margin-top: 10px;
        font-size: 50px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 410px) {
        margin-top: 10px;
        font-size: 40px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 320px){
        margin-top: 10px;
        font-size: 34px;
        text-align: center;
        width: 70%;
        margin: 0 auto;
    }
`

export const PlanetSubtitle = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 32px;

    @media (max-width: 930px) {
        font-size: 16px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 410px) {
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 380px) {
        font-size: 14px;
        width: 60%;
        margin: 0 auto;
    }

    @media (max-width: 320px){
        margin-top: 10px;
        font-size: 12px;
        text-align: center;
        width: 60%;
        margin: 0 auto;
    }
`

export const PlanetAndDesc = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 930px) {
        flex-direction: column;
        width: 80vw;
        align-items: center;
    }
`

export const DescPlanet = styled.div`
    width: 445px;
    height: 472px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const PlanetOption = styled.ul`
    display: flex;
    color: #fff;

    @media (max-width: 930px) {
        justify-content: space-evenly;
    }

    @media (max-width: 400px) {
        font-size: 12px;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 380px) {
        font-size: 8px;
        width: 70%;
        margin: 0 auto;
    }

    @media (max-width: 320px){
        font-size: 6px;
        width: 60%;
    }
`

export const LiPlanetValue = styled(Link)`
    list-style: none;
    padding: 5px;
    align-self: flex-end;
    text-decoration: none;
    color: #fff;

    @media (max-width: 930px) {
        font-size: 16px;
    }
`

export const Distances = styled.div`
    display: flex;
    justify-content: flex-start;

    @media (max-width: 930px) {
        font-size: 16px;
        justify-content: space-evenly;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
    }
`

export const DistanceTitle = styled.p`
    font-size: 14px;
    letter-spacing: 2.36px;
    padding: 10px;
    color: #fff;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 410px) {
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 400px) {
        margin-top: 10px;
        font-size: 10px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 320px){
        margin-top: 10px;
        font-size: 8px;
        text-align: center;
        width: 60%;
        margin: 0 auto;
    }
`

export const DistanceNumber = styled.p`
    font-size: 28px;
    padding: 10px;
    color: #fff;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 22px;
        text-align: center;
        width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 410px) {
        margin-top: 10px;
        font-size: 20px;
        text-align: center;
        width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 400px) {
        margin-top: 10px;
        font-size: 22px;
        text-align: center;
        width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 320px){
        margin-top: 10px;
        font-size: 18px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }
`