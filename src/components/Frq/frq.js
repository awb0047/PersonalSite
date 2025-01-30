import React from "react";
import { FrqContainer, InnerFrqContainer } from "./frqStyle"
import { QA } from '../Small Components'

export function Frq( {
    props
} ) {
    return (
        <FrqContainer>
            <InnerFrqContainer>
                <QA Delay={0.2} Question={"How much experience do I have?"} Answer={"I have 2 years of professional experience in the defense contracting industry, and 4 years of total freelance experience."}/>
                <QA Delay={0.35} Question={"How do I contact you?"} Answer={"Click the contact button on the top of the screen, or send me a message on LinkedIn!"}/>
                <QA Delay={0.5} Question={"What technical skills do you have?"} Answer={"A list of languages, frameworks and other skills can be found on the about page, but a full updated list can be found on my resume."}/>
            </InnerFrqContainer>
        </FrqContainer>
    );
}