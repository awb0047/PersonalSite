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
    width: min(90vw, 1280px);
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
    padding: 0px 10px;
`

export const Picture = styled(motion.img)`
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    height: min(50vw, 500px);
`

export const AboutTextContainer = styled(motion.div)`
    width: 50%;
    height: min(50vw, 500px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutMain = styled(motion.h1)`
    font-size: min(3vw, 50px);
    font-weight: bold;
    line-height: min(4vw, 70px);
    color: var(--title-primary);
`

export const AboutSub = styled(motion.h2)`
    padding-top: 50px;
    font-size: min(2vw, 22px);
    color: var(--title-primary);
`

export const LanguagesTitle = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: min(6vw, 150px);
    margin-bottom: min(3vw, 50px);
`

export const LanguageContainer = styled(motion.div)`
    width: 100%;
    height: auto;
    text-align: center;
`

export const Language = styled.div`
    display: inline-block;
    width: min(15vw, 150px);
    height: min(15vw, 150px);
    margin: min(5vw, 5px);
`
export const LanguageImg = styled.img`
    width: 100%;
    height: 100%;
`

export const TextContainer = styled.div`
    width: 60%;
    height: auto;
    padding-top: min(6vw, 150px);
`

export const Text = styled.h2`
    width: 100%;
    font-size: min(2vw, 22px);
    color: var(--title-primary);
    padding: 20px 0px;
`

export const ImagesContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: min(500px, 40vw);
    margin-top: min(6vw, 150px);
`

export const ImageContainer = styled.div`
    width: auto;
    height: 100%;
    overflow: hidden;
    `

export const Image = styled.img`
    height: 100%;
    width: auto;
    margin: 0px 10px;
    border-radius: 20px;
    object-fit: cover;
`