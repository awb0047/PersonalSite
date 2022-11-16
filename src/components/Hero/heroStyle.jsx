import styled from 'styled-components';
import { motion } from 'framer-motion'

const Colors = {
    color1: '#ffffff',
};

export const HeroContainer = styled.div`
    height: 58vw;
    width: 100vw;
    max-height: 100vh;
    //background-image: url("https://www.reviewgeek.com/p/uploads/2020/02/e7e44edc-4.jpg?height=200p&trim=2,2,2,2");
    background-image: url("sunset.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleContainer = styled.div`
    width: auto;
    height:auto;
    display: flex;
    flex-direction: row;
`

export const Title1 = styled(motion.h1)`
    font-size: 80px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #ffffff;
    margin-bottom: 00px;
    user-select: none;
    margin: 0 20px;
`

export const Title2 = styled(motion.h1)`
    font-size: 80px;
    font-family: imported;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 00px;
    user-select: none;
`