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
    padding-top: 50vh;
`

export const Title = styled(motion.h1)`
    font-size: 100px;
    font-family: font2;
    font-weight: bolder;
    color: rgb(0, 0 , 0);
`

export const InnerPhotos = styled.div`
    width: 80%;
    height: auto;
`

export const Photo = styled.img`
    display: inline-block;
    max-width: 100%;
    height: 600px;
    background: blue;
    margin: 50px 50px;
`