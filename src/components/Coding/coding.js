import React, { useState } from "react";
import { CodingContainer, InnerLanguages, LanguagesTitle, Title, SubTitle, LanguageContainer, Language, LanguageImg, CardContainer, ShadowContainer, PictureContainer, PictureMask, CardText, WorksContainer, TextCardContainer, TextCardTitle, TextCardText } from "./codingStyle"

export function Coding( {
    props
} ) {

    const codeHover = () => {
        console.log("Code Hover!");
    }

    return (
        <CodingContainer id="coding">
            <InnerLanguages>
                <LanguagesTitle>
                    <Title>Languages I Have Experience With</Title>
                </LanguagesTitle>
                <LanguageContainer>
                        <Language><LanguageImg src="js.png"/></Language>
                        <Language><LanguageImg src="html.png"/></Language>
                        <Language><LanguageImg src="css.png"/></Language>
                        <Language><LanguageImg src="java.png"/></Language>
                        <Language><LanguageImg src="cs.png"/></Language>
                        <Language><LanguageImg src="xaml.png"/></Language>
                </LanguageContainer>
                <LanguagesTitle>
                    <Title>Frameworks & Other Experiences</Title>
                </LanguagesTitle>
                <LanguageContainer>
                        <Language><LanguageImg src="node.png"/></Language>
                        <Language><LanguageImg src="express.png"/></Language>
                        <Language><LanguageImg src="mongodb.png"/></Language>
                        <Language><LanguageImg src="net.png"/></Language>
                        <Language><LanguageImg src="firebase.png"/></Language>
                </LanguageContainer>
                <LanguagesTitle>
                    <Title>Check Out My Works</Title>
                    <SubTitle>Here are some of my public projects I've worked on recently!</SubTitle>
                </LanguagesTitle>
                <WorksContainer>

                    <Hovercard backgroundImage={"comet.png"} link = "https://www.cometproxies.com/"/>
                    <TextCard Title={"Comet Proxies"} Text={"A complete system including a dynamic dashboard and a backend API and database that seemlessly work together. Built using the MERN stack"}/>

                    <TextCard Title={"LKQ Party Patrol"} Text={"A Static Website for a local business with some basic functions, completely made from scratch with the exception of utilization of formspree to manage contacting through email."}/>
                    <Hovercard backgroundImage={"partypatrol-ss.png"} link = "https://lkqpartypatrol.com/"/>

                    <Hovercard backgroundImage={"entertainment.png"} link = "https://lkqentertainment.com/"/>
                    <TextCard Title={"LKQ Entertainment"} Text={"Also a Static Website for a local business with some basic functions, completely made from scratch with the exception of utilization of formspree to manage contacting through email."}/>

                </WorksContainer>
            </InnerLanguages>
        </CodingContainer>
    );
}

export function Hovercard( {
    backgroundImage, link
} ) {

    const [textValues, setTextValues] = useState([30, 50, "grey"]);
    const [pictureValues, setPictureValues] = useState([0, 0]);
    const [mask, setMask] = useState(0);

    const MouseOver = () => {
        setTextValues([40, 60, "#f3f4f6"]);
        setPictureValues([-15, -15]);
        setMask(0.4);
    }

    const MouseOut = () => {
        setTextValues([30, 50, "grey"]);
        setPictureValues([0, 0]);
        setMask(0);
    }

    return (
        <CardContainer onMouseOver={MouseOver} onMouseOut={MouseOut} href={link}>
            <ShadowContainer></ShadowContainer>
            <PictureContainer style={{ marginLeft: pictureValues[0], marginTop: pictureValues[1], backgroundImage: `url(${backgroundImage})` }}>
                <PictureMask style={{ background: `rgba(83, 83, 83, ${mask})` }}/>
                <CardText style={{ marginLeft: textValues[0], marginBottom: textValues[1], color: textValues[2] }}>Check It Out</CardText>
            </PictureContainer>
        </CardContainer>
    );
}

export function TextCard( {
    Title, Text
} ) {

    return (
        <TextCardContainer>
            <TextCardTitle>{Title}</TextCardTitle>
            <TextCardText>{Text}</TextCardText>
        </TextCardContainer>
    );
}