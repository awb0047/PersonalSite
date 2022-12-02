import styled from 'styled-components';
import { motion } from 'framer-motion';


const Colors = {
    color1: '#ffffff',
    color2: '#343A40',
};


export const CodingContainer = styled.div`
    width: 100%;
    height: auto;
    background: rgb(236, 236, 236);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const InnerLanguages = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 1100px){
        width: 90%;
    }
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

export const Title = styled.h1`
    font-size: 38px;
    font-family: font2;
    font-weight: bolder;
    text-align: center;
    color: #343A40;
`

export const SubTitle = styled.h1`
    font-size: 25px;
    font-family: font2;
    font-weight: regular;
    text-align: center;
    color: #343A40;
`

export const LanguageContainer = styled.div`
    width: 100%;
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
`
export const WorksContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 80px;
`


//Hovercard Styling

export const CardContainer = styled.a`
    position: relative;
    display: inline-block;
    width: 50%;
    height: 500px;
`

export const ShadowContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 450px;
    margin-top: 0px;
    margin-left: 0px;
    background: #181818;
`

export const PictureContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 450px;
    margin-top: 0px;
    margin-left: 0px;
    transition: 0.3s;
    background-size: cover;
    background-position: center;
`

export const PictureMask = styled.div`
    background: rgba(83, 83, 83, 0);
    width: 100%;
    height: 100%;
    transition: 0.3s;
`

export const CardText = styled(motion.h1)`
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    margin-left: 30px;
    font-size: 30px;
    font-family: spartan;
    font-weight: bolder;
    color: grey;
    transition: 0.3s;
`
//Textcard Styling

export const TextCardContainer = styled.div`
    display: inline-block;
    align-items: center;
    width: 50%;
    height: 500px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 20px;
    vertical-align:top;
`

export const TextCardTitle = styled.h1`
    font-family: font2;
    font-weight: bold;
    color: #181818;
    font-size: 60px;
`

export const TextCardText = styled.h2`
    font-family: font2;
    font-weight: 400;
    color: #181818;
    font-size: 21px;
    margin-top: 30px;
    line-height: 1.5;
`