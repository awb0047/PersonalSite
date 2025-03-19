import styled from "styled-components";
import { motion } from 'framer-motion';
import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../../components/App/App";

export const ParallaxContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
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

export function Parallax( {
    props
} ) {

    const theme = useContext(ThemeContext);
    
    let zeroPath = theme === false ? "images/zero_dark.png" : "images/zero_light.png";
    let onePath = theme === false ? "images/one_dark.png" : "images/one_light.png";

    const parent = useRef(null);

    useEffect(() => {
        const paralax = (e) => {
            for (var i = 0; i < parent.current.children.length; i++) {
                var moving_value = parent.current.children[i].getAttribute("data-value");
                var x = (e.clientX * moving_value) / 70;
                var y = (e.clientY * moving_value) / 70;
    
                parent.current.children[i].style.transform = `
                    translate(
                        ${x}%,
                        ${y}%
                    )
                `
            }
        }

        window.addEventListener('mousemove', paralax);

        return () => {
            window.removeEventListener('mousemove', paralax);
          };
    }, []);


    return (
        <ParallaxContainer>
            <InnerImages ref={parent}>
                <ParalaxImage
                    src={zeroPath} data-value="-4" style={{ left: `calc(100px + 5%)`, top: "350px"}}
                />
                <ParalaxImage
                    src={onePath} data-value="-8" style={{ left: "calc(80% + 70px)", top: "200px"}}
                />
                <ParalaxImage
                    src={onePath} data-value="-6" style={{ left: "calc(100px + 3%)", top: "70%"}}
                />

                <ParalaxImage
                    src={zeroPath} data-value="-2" style={{ right: "350px", top: "1030px"}}
                />
                <ParalaxImage
                    src={zeroPath} data-value="-8" style={{ left: "100px", top: "100px"}}
                />
                <ParalaxImage
                    src={zeroPath} data-value="4" style={{ right: "80px", top: "60%"}}
                />
            </InnerImages>
        </ParallaxContainer>
    );
}