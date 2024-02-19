import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled.div`
    width: 100%;
    height: 35vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerContainer = styled.div`
    width: 60%;
    height: 80%;
    text-align: center;
`

export const MainTitle = styled(motion.h1)`
    font-size: 200px;
    font-weight: bold;
    color: var(--text-primary);
    margin: 0;
    line-height: 200px;
    padding: 80px 10px;
`

export const SubTitle = styled(motion.h2)`
    font-size: 22px;
    color: var(--text-primary);
    padding: 60px 400px;
`