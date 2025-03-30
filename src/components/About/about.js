import React from "react";
import { AboutContainer, InnerAboutContainer, PictureContainer, Picture, AboutTextContainer, AboutMain, AboutSub, LanguagesTitle, LanguageContainer, Language, LanguageImg, TextContainer, Text, ImagesContainer, Image } from "./aboutStyle"

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
                        <AboutSub>Since I started coding when I was a kid, I've done a lot of individual projects and contract work for small buisnesses. I am currently an Intern at Parsons Corporation and will be entering the field full time summer of 2025 in Seattle, Washington.</AboutSub>
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
                        <Language><LanguageImg src="images/cpp.png"/></Language>
                        <Language><LanguageImg src="images/C.png"/></Language>
                        <Language><LanguageImg src="images/js.png"/></Language>
                        <Language><LanguageImg src="images/html.png"/></Language>
                        <Language><LanguageImg src="images/css.png"/></Language>
                        <Language><LanguageImg src="images/java.png"/></Language>
                        <Language><LanguageImg src="images/cs.png"/></Language>
                        <Language><LanguageImg src="images/python.png"/></Language>
                </LanguageContainer>
                <LanguagesTitle
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.3, delay: 0.3}}>
                    <AboutMain>Frameworks & Other Experiences</AboutMain>
                </LanguagesTitle>
                <LanguageContainer
                    initial={{ opacity: 0, y: -30}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.3, delay: 0.4}}>
                        <Language><LanguageImg src="images/react.png"/></Language>
                        <Language><LanguageImg src="images/node.png"/></Language>
                        <Language><LanguageImg src="images/express.png"/></Language>
                        <Language><LanguageImg src="images/mongodb.png"/></Language>
                        <Language><LanguageImg src="images/net.png"/></Language>
                        <Language><LanguageImg src="images/firebase.png"/></Language>
                </LanguageContainer>
                <TextContainer>
                    <Text>My coding journey first began in my earlier days of high school where I took up an interest in game developement. After a couple years of coding classes and personal projects, I declared my minor in Software Engineering at Auburn University. There I gained skills on algorithms, data structures, databases, operating systems, and much more of the essential foundations of the field. During my time at university I have worked multiple freelance projects for small companies, and landed an internship in the defense contracting sector.</Text>
                    <Text>I've discovered I love working on both front-end and back-end developement. While my initial interested lied in creating appealing UI's, my time at Auburn has showed me how interesting back-end and lower level developement can be.</Text>
                    <Text>Outside of Programming, I spend most of my freetime backpacking, traveling, playing sports, or learning to cook.</Text>
                </TextContainer>
                <ImagesContainer>
                    <Image src="images/samford.jpg"/>
                    <Image src="images/rainier.jpg"/>
                </ImagesContainer>
            </InnerAboutContainer>
        </AboutContainer>
    );
}