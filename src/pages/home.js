import React from "react";
import { Title, Work } from '../components'
import { Parallax} from '../components/Small Components'

export function HomePage( props ) {
    return (
        <div style={{width:"100vw",height:"100%"}}>
            <Parallax/>
            <Title main={"Addison Barrow. Full-Stack Dev."} sub={"Whatever web application you can dream of. I can build it"}/>
            <Work/>
        </div>
    )
}