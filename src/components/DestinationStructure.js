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





const DestinationStructure = (props) => {
    

        return(
            <Moon/>
        )
    }

export default DestinationStructure;