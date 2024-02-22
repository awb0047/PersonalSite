import { useState } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

export const CardContainer = styled.a`
    position: relative;
    display: inline-block;
    width: 55%;
    height: 500px;
    margin-bottom: 70px;

    @media screen and (max-width: 700px){
        height: 70vw;
    }
`

export const ShadowContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 450px;
    margin-top: 0px;
    margin-left: 0px;
    background: #181818;
    border-radius: 34px;

    @media screen and (max-width: 700px){
        height: 100%;
    }
`

export const PictureContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 450px;
    margin-top: 0px;
    margin-left: 0px;
    transition: 0.3s;
    background-size: cover;
    background-position: center;
    border-radius: 30px;

    @media screen and (max-width: 700px){
        height: 100%;
    }
`

export const PictureMask = styled.div`
    background: rgba(83, 83, 83, 0);
    width: 100%;
    height: 100%;
    transition: 0.3s;
    border-radius: 30px;
`

export const CardText = styled(motion.h1)`
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    margin-left: 30px;
    font-size: 30px;
    font-family: spartan;
    font-weight: bolder;
    color: grey;
    transition: 0.3s;
`

export function Hovercard( {
    backgroundImage, link, text
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
                <CardText style={{ marginLeft: textValues[0], marginBottom: textValues[1], color: textValues[2] }}>{text}</CardText>
            </PictureContainer>
        </CardContainer>
    );
}