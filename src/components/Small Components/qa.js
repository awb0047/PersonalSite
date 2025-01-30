import styled from "styled-components";
import { motion } from 'framer-motion';

export const QAContainer = styled(motion.div)`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 34px;

    background: rgba(124, 122, 116, 0.2);
`

export const QAInnerContainer = styled.div`
    width: 90%;
    height: auto;
    padding: 40px 0px;
`

export const QText = styled.h1`
    font-family: var(--primary-font);
    font-weight: bolder;
    color: var(--text-primary);
    font-size: min(3vw, 20px);
    margin-bottom: 10px;
`

export const AText = styled.h2`
    font-family: var(--primary-font);
    font-weight: 600;
    color: var(--text-secondary);
    font-size: min(2vw, 20px);
    line-height: 1.5;
`

export function QA( {
    Question, Answer, Delay
} ) {

    return (
        <QAContainer initial={{ opacity: 0, y: -30}} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.3, delay: Delay}}>
            <QAInnerContainer>
                <QText>{Question}</QText>
                <AText>{Answer}</AText>
            </QAInnerContainer>
        </QAContainer>
    );
}