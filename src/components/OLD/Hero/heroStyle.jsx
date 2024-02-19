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

    @media screen and (max-width: 1000px){
        font-size: 8vw;
        margin: 0 10px;
    }

    @media screen and (max-width: 400px){
        font-size: 30px;
    }
`

export const Title2 = styled(motion.a)`
    font-size: 80px;
    font-family: imported;
    font-weight: bold;
    color: #ffffff;
    margin-left: 10px;
    user-select: none;

    @media screen and (max-width: 1000px){
        font-size: 8vw;
        margin-left: 10px;
    }

    @media screen and (max-width: 400px){
        font-size: 30px;
    }
`

export const ScrollButtonContainer = styled.a`
    width: 50px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin: 0 -25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 30;
`

export const CenterLine = styled(motion.div)`
    background: white;
    position: absolute;
    margin-top: 30px;
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
export const Text = styled.h3`
    color: white;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: light;
`


// HERO 2 CSS //

export const Hero2 = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: rgb(0, 0, 0)
`

export const ImagesContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: hidden;
    z-index: 0;
`

export const InnerImages = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    top: 0;
    overflow: hidden;
`

export const ParalaxImage = styled(motion.img)`
    position: absolute;
    height: 25px;
    max-width: 100%;

    @media screen and (max-width: 500px){
        display: none;
    }
`

export const Password = styled.div`
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: 30;

    display: flex;
    align-items: center;
    border-width: 1px;
    width: 283px;
    height: 50px;
`

export const CenterContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 42rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

export const Trademark = styled.h2`
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: rgb(163 163 163);
`

export const Title = styled.h1`
    height: auto;
    line-height: 170px;
    font-size: 220px;
    color: white;
    font-family: imported;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 100;
    text-align: center;

    @media screen and (max-width: 900px){
        font-size: 24.5vw;
        line-height: 18.8vw;
    }
`

export const Subtitle = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgb(245 245 245);
    padding: 0 4rem;
`

export const Logo = styled.img`
    width: 100%;
`