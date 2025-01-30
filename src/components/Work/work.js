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
                <Hovercard backgroundImage={"images/comet.png"} link = "https://www.cometproxies.com/" text = "Comet Proxies"/>
                <TextCard Title={"COMET PROXIES"} Text={"Full Stack application comprised of a dynamic dashboard, custom backend API, and database that seemlessly work together. Built using the MERN stack (No longer available)"} GitLink={"https://github.com/awb0047"} DemoLink={"https://www.amazon.com/"}/>

                <TextCard Title={"PSEUDO"} Text={"Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."} GitLink={"https://github.com/TrevorAupperle/pseudo"} DemoLink={"https://www.amazon.com/"}/>
                <Hovercard backgroundImage={"images/pseudo.jpg"} link = "https://github.com/TrevorAupperle/pseudo" text = "Pseudo"/>

                <Hovercard backgroundImage={"images/portfolio.png"} link = "https://www.addisonbarrow.com/" text = "My Website"/>
                <TextCard Title={"My Website"} Text={"My Personal Portfolio that has change a a lot over the years, built using react and hosted on Google Firebase"} GitLink={"https://github.com/awb0047/PersonalSite"} DemoLink={"https://www.addisonbarrow.com/"}/>

                <TextCard Title={"LKQ ENTERTAINMENT"} Text={"In the realm of code, logic unfolds like a choreographed dance, where variables and functions perform in a symphony of precision. Programmers craft stories of algorithms, pushing boundaries in the ever-evolving dance of technology."} GitLink={"https://github.com/awb0047"} DemoLink={"https://lkqentertainment.com/"}/>
                <Hovercard backgroundImage={"images/entertainment.png"} link = "https://lkqentertainment-1a156.web.app/" text = "LKQ Entertainment"/>
            </InnerWorkContainer>
        </WorkContainer>
    );
}