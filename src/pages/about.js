import React from "react";
import { Title, About } from '../components'

export function AboutPage( props ) {
    return (
        <div style={{width:"100vw",height:"100%"}}>
            <Title main={"I'm Addison!"} sub={""}/>
            <About/>
        </div>
    )
}