import React from "react";
import { NavBar, Hero, About } from '../components'

export function HomePage( props ) {
    return (
        <div style={{background:"#FFFFFF",width:"100vw",height:"100vh"}}>
            <NavBar/>
            <Hero/>
            <About/>
        </div>
    )
}