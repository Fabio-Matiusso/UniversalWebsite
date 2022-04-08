import React from "react"
import Header from '../components/Header'
import HomeElements from "../components/HomeElements"

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

export default function Home() {
    return (
        <>
            <Header links={links}/>
            <HomeElements />
        </>
    )
}