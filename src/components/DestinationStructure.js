import React, { useState } from "react";
import styled from 'styled-components'
import ImageMoon from '../images/destination/image-moon.png'
import BackgroundImagePlanets from '../images/destination/background-destination-desktop.jpg'
import Header from "./Header";
import Slide from 'react-reveal/Slide';
import Moon from "./planets_destination/Moon";
import Europa from "./planets_destination/Europa";
import Mars from "./planets_destination/Mars";
import Titan from "./planets_destination/Titan";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";



const links = [
    {
        label: '00 Home',
        path: '/',
    },
    {
        label: '01 destination',
        path: '/destination'
    },
    {
        label: '03 crew',
        path: '/crew'
    },
    {
        label: '00 technology',
        path: '/technology'
    },

]

const PlanetOption = styled.ul`
    display: flex;
    color: #fff;
`

const LiPlanetValue = styled.li`
    list-style: none;
    padding: 5px;
    align-self: flex-end;
`


const DestinationStructure = (props) => {
    

        return(
            <Moon/>
        )
    }

export default DestinationStructure;