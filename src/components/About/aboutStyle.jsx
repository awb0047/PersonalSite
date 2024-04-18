import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 200px;
`

export const InnerAboutContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const PictureContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
`

export const Picture = styled(motion.img)`
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    height: 500px;
`

export const AboutTextContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutMain = styled(motion.h1)`
    font-size: 50px;
    font-weight: bold;
    line-height: 70px;
    color: var(--title-primary);
`

export const AboutSub = styled(motion.h2)`
    padding-top: 50px;
    font-size: 22px;
    color: var(--title-primary);
`

export const LanguagesTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`

export const LanguageContainer = styled.div`
    width: 90%;
    height: auto;
    text-align: center;
`

export const Language = styled.div`
    display: inline-block;
    width: 250px;
    height: 250px;
    margin: 25px;
`
export const LanguageImg = styled.img`
    width: 246px;
    height: 246px;

    width: 100%;
    height: 100%;
`