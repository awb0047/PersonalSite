import React from "react";
import { WorkContainer, InnerWorkContainer } from "./workStyle"
import { Hovercard, TextCard } from '../Small Components'

export function Work( {
    props
} ) {
    return (
        <WorkContainer>
            <InnerWorkContainer
                initial={{ opacity: 0, y: -30}}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: 0.3, delay: 0.2}}>
                <Hovercard backgroundImage={"comet.png"} link = "https://www.cometproxies.com/" text = "Comet Proxies"/>
                <TextCard Title={"COMET PROXIES"} Text={"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."} GitLink={"https://github.com/awb0047"} DemoLink={"https://www.amazon.com/"}/>

                <TextCard Title={"PSEUDO"} Text={"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."} GitLink={"https://github.com/TrevorAupperle/pseudo"} DemoLink={"https://www.amazon.com/"}/>
                <Hovercard backgroundImage={"pseudo.jpg"} link = "https://www.cometproxies.com/" text = "Pseudo"/>

                <Hovercard backgroundImage={"entertainment.png"} link = "https://lkqentertainment.com/" text = "LKQ Entertainment"/>
                <TextCard Title={"LKQ ENTERTAINMENT"} Text={"In the realm of code, logic unfolds like a choreographed dance, where variables and functions perform in a symphony of precision. Programmers craft stories of algorithms, pushing boundaries in the ever-evolving dance of technology."} GitLink={"https://github.com/awb0047"} DemoLink={"https://lkqentertainment.com/"}/>
            </InnerWorkContainer>
        </WorkContainer>
    );
}