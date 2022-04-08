import React from "react";
import Header from "../components/Header";
import DestinationStructure from "../components/DestinationStructure";
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
export default function Destination() {
    return (
        <>
            <DestinationStructure />
        </>
    )
}