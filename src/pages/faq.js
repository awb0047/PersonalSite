import React from "react";
import { Title, Frq } from '../components'

export function FaqPage( props ) {
    return (
        <div style={{width:"100vw",height:"100%"}}>
            <Title main={"FRQ"} sub={"Frequently Asked Questions"}/>
            <Frq/>
        </div>
    )
}