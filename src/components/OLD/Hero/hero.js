import { Button, useToast } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { motion } from 'framer-motion'
import { HeroContainer, TitleContainer, Title1, Title2, ScrollButtonContainer, CenterLine, LeftLine, RightLine, Text } from "./heroStyle"
import { Hero2, ImagesContainer, InnerImages, ParalaxImage, CenterContainer, Trademark, Title, Subtitle, Logo } from "./heroStyle"


export function OldHero( {
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
    const [leftValues, setLeftValues] = useState([0, 0, "90px"])
    const [rightValues, setRightValues] = useState([0, 0, "90px"])

    const MouseOver = () => {
        setCenterValues([4, "47%"]);
        setLeftValues([45, 5, "67px"]);
        setRightValues([-45, -5, "67px"]);
    }

    const MouseOut = () => {
        setCenterValues([2, "100%"]);
        setLeftValues([0, 0, "90px"]);
        setRightValues([0, 0, "90px"]);
    }

    return (
        <ScrollButtonContainer href="#about" onMouseOver={MouseOver} onMouseOut={MouseOut}> 
            <Text>About</Text>
            <CenterLine animate={{ width: centerValues[0], height: centerValues[1], color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50 }}/>
            <LeftLine animate={{ rotate: leftValues[0], x: leftValues[1], y: leftValues[2], width: centerValues[0], height: 15, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50, delay: 0.0 }}/>
            <RightLine animate={{ rotate: rightValues[0], x: rightValues[1], y: rightValues[2], width: centerValues[0], height: 15, color: "#FFA500" }} transition={{ type: "spring", stiffness: 400, damping: 50, delay: 0.0 }}/>
        </ScrollButtonContainer>
    );
}

export function Hero( {
    props
} ) {

    const parent = useRef(null);
    const toast = useToast();

    const paralax = (e) => {
        for (var i = 0; i < parent.current.children.length; i++) {
            var moving_value = parent.current.children[i].getAttribute("data-value");
            var x = (e.clientX * moving_value) / 70;
            var y = (e.clientY * moving_value) / 70;

            parent.current.children[i].style.transform = `
                translate(
                    ${x}%,
                    ${y}%
                )
            `
        }
    }

    const contactClick = () => {
        toast({
            title: 'Try Again Later.',
            description: "Contact method will be added in the near future.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
    }


    return (
        <Hero2 id="home" onMouseMove={paralax}>
            <ImagesContainer>
                <InnerImages ref={parent}>
                    <ParalaxImage
                        src="one.png" data-value="-4" style={{ left: `calc(100px + 5%)`, bottom: "150px"}}
                    />
                    <ParalaxImage
                        src="one.png" data-value="-8" style={{ left: "calc(70% + 70px)", top: "200px"}}
                    />
                    <ParalaxImage
                        src="one.png" data-value="-6" style={{ left: "calc(100px + 30%)", top: "23%"}}
                    />

                    <ParalaxImage
                        src="zero.png" data-value="-2" style={{ right: "350px", top: "1030px"}}
                    />
                    <ParalaxImage
                        src="zero.png" data-value="-8" style={{ left: "100px", top: "100px"}}
                    />
                    <ParalaxImage
                        src="zero.png" data-value="4" style={{ right: "80px", top: "20%"}}
                    />
                </InnerImages>
            </ImagesContainer>
            <CenterContainer>
                {/* <Title>Addison</Title>
                <Title>Barrow</Title> */}
                <Logo src={"Logo.png"}/>
                <Subtitle>
                    <motion.a href="#coding" whileHover={{ scale: 1.2, color: "rgb(255 0 0)" }}>CODE</motion.a>
                    <span>-</span>
                    <motion.a href="#photo" whileHover={{ scale: 1.2, color: "rgb(255 0 0)" }}>PHOTO</motion.a>
                    <span>-</span>
                    <motion.a href="#coding" whileHover={{ scale: 1.2, color: "rgb(255 0 0)" }}>DEV</motion.a>
                </Subtitle>
                <Button onClick={contactClick} w={"200px"} h={"50px"} mt={"20px"}>CONTACT ME</Button>
            </CenterContainer>
            <ScrollButton/>
        </Hero2>
    );
}