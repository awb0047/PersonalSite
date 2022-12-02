import { Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { HeroContainer, TitleContainer, Title1, Title2, ScrollButtonContainer, CenterLine, LeftLine, RightLine } from "./heroStyle"

export function Hero( {
    props
} ) {

    const codeHover = () => {
        console.log("Code Hover!");
    }

    return (
        <HeroContainer id="home">
            <TitleContainer>
                <Title1 href="#coding" onMouseOver={codeHover} whileHover={{ scale: 1.1, x: 0, color: "#89CFF0" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}>CODE</Title1>
                <Title1> - </Title1>
                <Title2 href="#photo" onmouseover="bigImg(this)" whileHover={{ scale: 1.1, x: 25, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}>PHOTOGRAPHY</Title2>
            </TitleContainer>
            <ScrollButton/>
        </HeroContainer>
    );
}

export function ScrollButton( {
    props
} ) {

    const [centerValues, setCenterValues] = useState([2, "100%"])
    const [leftValues, setLeftValues] = useState([0, 0, "60px"])
    const [rightValues, setRightValues] = useState([0, 0, "60px"])

    const MouseOver = () => {
        setCenterValues([4, "80%"]);
        setLeftValues([45, 5, "52px"]);
        setRightValues([-45, -5, "52px"]);
    }

    const MouseOut = () => {
        setCenterValues([2, "100%"]);
        setLeftValues([0, 0, "60px"]);
        setRightValues([0, 0, "60px"]);
    }

    return (
        <ScrollButtonContainer href="#about" onMouseOver={MouseOver} onMouseOut={MouseOut}> 
            <CenterLine animate={{ width: centerValues[0], height: centerValues[1], color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}/>
            <LeftLine animate={{ rotate: leftValues[0], x: leftValues[1], y: leftValues[2], width: centerValues[0], height: 15, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50, delay: 0.0 }}/>
            <RightLine animate={{ rotate: rightValues[0], x: rightValues[1], y: rightValues[2], width: centerValues[0], height: 15, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50, delay: 0.0 }}/>
        </ScrollButtonContainer>
    );
}