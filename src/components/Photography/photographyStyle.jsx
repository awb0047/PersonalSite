import styled from 'styled-components';
import { motion } from 'framer-motion';


const Colors = {
    color1: '#ffffff',
    color2: '#343A40',
};


export const PhotographyContainer = styled.div`
    width: 100%;
    height: auto;
    background: rgb(236, 236, 236);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
`

export const TitleSequence = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    //background: red;
    align-items: center;
    justify-content: center;
`

export const Title = styled(motion.h1)`
    font-size: 100px;
    font-family: font2;
    font-weight: bolder;
    color: rgb(0, 0 , 0);
    z-index: 289;
    position: static;
    top: 45%;
    //background: green;

    @media screen and (max-width: 1000px){
        font-size: 9vw;
        top: calc(50% - 7vw)
    }
`

export const InnerPhotos = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

export const GridLeft = styled.div`
    width: 5000px;
    height: auto;
    display: grid;
    grid-row-gap: 20px;
    margin-right: 10px;
`

export const GridMiddle = styled.div`
    width: 5000px;
    height: auto;
    display: grid;
    grid-row-gap: 20px;
    margin-left: 10px;
    margin-right: 10px;
`

export const GridRight = styled.div`
    width: 5000px;
    height: auto;
    display: grid;
    grid-row-gap: 20px;
    margin-left: 10px;
`

export const Photo = styled.img`
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
`

export const Test = styled.div`
    background: white;
    width: 100%;
    height: 200px;
`