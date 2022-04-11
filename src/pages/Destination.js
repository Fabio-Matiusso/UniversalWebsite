import React from "react";
import Header from "../components/Header";
import DestinationStructure from "../components/DestinationStructure";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Moon from "../components/planets_destination/Moon";
import Mars from "../components/planets_destination/Mars";
import Titan from "../components/planets_destination/Titan";
import Europa from "../components/planets_destination/Europa";

export const links = [
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
export default function Destination() {
    return (
        <>

            <DestinationStructure />
        </>
    )
}