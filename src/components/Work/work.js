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
                <TextCard Title={"COMET PROXIES"} Text={"Full Stack application comprised of a dynamic dashboard, custom backend API, and database that seemlessly work together. Built using the MERN stack (No longer available)"} GitLink={"https://github.com/awb0047/Comet-Proxies"}/>

                <TextCard Title={"PSEUDO"} Text={"Full Stack web-app that bridges the gap between LinkedIn and Stack Overflow, allowing employers to connect with great problem solvers"} GitLink={"https://github.com/TrevorAupperle/pseudo"}/>
                <Hovercard backgroundImage={"images/pseudo.jpg"} link = "https://github.com/TrevorAupperle/pseudo" text = "Pseudo"/>

                <Hovercard backgroundImage={"images/portfolio.png"} link = "https://www.addisonbarrow.com/" text = "My Website"/>
                <TextCard Title={"My Website"} Text={"My Personal Portfolio that has changed a lot over the years, built using react and hosted on Google Firebase"} GitLink={"https://github.com/awb0047/PersonalSite"} DemoLink={"https://www.addisonbarrow.com/"}/>

                <TextCard Title={"LKQ Party Patrol"} Text={"A Static Website for a local business with some basic functions, completely made from scratch with the exception of utilization of formspree to manage contacting through email."} GitLink={"https://github.com/awb0047"} DemoLink={"https://lkqpartypatrol.web.app/"}/>
                <Hovercard backgroundImage={"images/partypatrol-ss.png"} link = "https://lkqpartypatrol.web.app/" text = "LKQ Entertainment"/>

                <Hovercard backgroundImage={"images/entertainment.png"} link = "https://lkqentertainment-1a156.web.app/" text = "LKQ Entertainment"/>
                <TextCard Title={"LKQ ENTERTAINMENT"} Text={"A Static Website for a local business with some basic functions, completely made from scratch with the exception of utilization of formspree to manage contacting through email."} GitLink={"https://github.com/awb0047"} DemoLink={"https://lkqentertainment-1a156.web.app/"}/>
            </InnerWorkContainer>
        </WorkContainer>
    );
}