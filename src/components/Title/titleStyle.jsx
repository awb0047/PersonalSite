import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
`

export const InnerContainer = styled.div`
    width: 90%;
    height: 80%;
    text-align: center;
`

export const MainTitle = styled(motion.h1)`
    font-size: min(8vw, 200px);
    font-weight: bold;
    color: var(--title-primary);
    margin: 0;
    line-height: min(8vw, 200px);
    padding: min(5vw, 80px) 15%;
`

export const SubTitle = styled(motion.h2)`
    font-size: 22px;
    font-weight: lighter;
    color: var(--title-primary);
    padding: min(1vw, 60px) 20px;
    word-wrap: break-word;
`