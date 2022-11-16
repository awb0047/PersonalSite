import React from "react";
import { HeroContainer, TitleContainer, Title1, Title2, Span } from "./heroStyle"

export function Hero( {
    props
} ) {

    const codeHover = () => {
        console.log("Code Hover!");
    }

    return (
        <HeroContainer>
            <TitleContainer>
                <Title1 onmouseover={() => codeHover()} whileHover={{ scale: 1.1, x: 0, color: "#89CFF0" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}>CODE </Title1>
                <Title1> - </Title1>
                <Title2 onmouseover="bigImg(this)" whileHover={{ scale: 1.1, x: 40, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}>PHOTOGRAPHY</Title2>
            </TitleContainer>
        </HeroContainer>
    );
}