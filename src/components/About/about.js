import React from "react";
import { AboutContainer, InnerAboutContainer, PictureContainer, Picture, AboutTextContainer, AboutMain, AboutSub, LanguagesTitle, LanguageContainer, Language, LanguageImg } from "./aboutStyle"

export function About( {
    props
} ) {
    return (
        <AboutContainer>
            <InnerAboutContainer>
                <PictureContainer>
                    <Picture
                        src={"images/me.jpg"}
                        initial={{ opacity: 0, y: -30}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{duration: 0.3, delay: 0.1}}/>
                </PictureContainer>
                <AboutTextContainer
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.3, delay: 0.2}}>
                        <AboutMain>I am a Software Engineer for Parsons and a Senior in Software Engineering at Auburn University.</AboutMain>
                        <AboutSub>Since I started coding when I was a kid, I've done alot of individual projects and contract work for small buisnesses. I am currently an Intern at Parsons Corporation, and will be entering the field full time summer of 2025</AboutSub>
                </AboutTextContainer>
                <LanguagesTitle
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.3, delay: 0.3}}>
                    <AboutMain>Languages I Have Experience With</AboutMain>
                </LanguagesTitle>
                <LanguageContainer
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.3, delay: 0.4}}>
                        <Language><LanguageImg src="images/js.png"/></Language>
                        <Language><LanguageImg src="images/html.png"/></Language>
                        <Language><LanguageImg src="images/css.png"/></Language>
                        <Language><LanguageImg src="images/java.png"/></Language>
                        <Language><LanguageImg src="images/cs.png"/></Language>
                        <Language><LanguageImg src="images/xaml.png"/></Language>
                </LanguageContainer>
                <LanguagesTitle>
                    <AboutMain>Frameworks & Other Experiences</AboutMain>
                </LanguagesTitle>
                <LanguageContainer>
                        <Language><LanguageImg src="images/node.png"/></Language>
                        <Language><LanguageImg src="images/express.png"/></Language>
                        <Language><LanguageImg src="images/mongodb.png"/></Language>
                        <Language><LanguageImg src="images/net.png"/></Language>
                        <Language><LanguageImg src="images/firebase.png"/></Language>
                </LanguageContainer>
            </InnerAboutContainer>
        </AboutContainer>
    );
}