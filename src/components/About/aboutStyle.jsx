import styled from 'styled-components';
import { motion } from 'framer-motion';

const Colors = {
    color1: '#ffffff',
};

export const AboutContainer = styled.div`
    width: 100%;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const InnerAboutContainer = styled.div`
    width: 1000px;
    height: auto;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-width:2px;
    border-style: solid;
    border-color: white;
    margin-top: 150px;
    margin-bottom: 150px;
    padding: 50px;
    text-align: center;
`

export const Line = styled.div`
    width: 2px;
    height: 100%;
    background: white;
    position: absolute;
`

export const TitleContainer = styled(motion.div)`
    width: auto;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
`

export const Dot = styled(motion.div)`
    width: 15px;
    height: 15px;
    background: white;
    margin: 30px 0px 20px 20px;
`

export const Description = styled.p`
    font-size: 30px;
    font-weight: regular;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
`