import styled from 'styled-components';
import { motion } from 'framer-motion'

const Colors = {
    color1: '#ffffff',
};

export const HeroContainer = styled.div`
    height: 100vh;
    width: 100vw;
    //background-image: url("https://www.reviewgeek.com/p/uploads/2020/02/e7e44edc-4.jpg?height=200p&trim=2,2,2,2");
    background-image: url("background1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const TitleContainer = styled.div`
    width: auto;
    height:auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 150px;
`

export const Title1 = styled(motion.a)`
    font-size: 80px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #ffffff;
    user-select: none;
    margin: 0 20px;
`

export const Title2 = styled(motion.a)`
    font-size: 80px;
    font-family: imported;
    font-weight: bold;
    color: #ffffff;
    margin-left: 10px;
    user-select: none;
`

export const ScrollButtonContainer = styled.a`
    width: 50px;
    height: 80px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`

export const CenterLine = styled(motion.div)`
    background: white;
    position: absolute;
`

export const LeftLine = styled(motion.div)`
    background: white;
    position: absolute;
    width: 5px;
    height: 20px;
`

export const RightLine = styled(motion.div)`
    background: white;
    position: absolute;
`