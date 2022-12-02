import React, { useState, useRef } from "react";
import { PhotographyContainer, Title, InnerPhotos, Photo } from "./photographyStyle"
import { motion, useScroll, useInView } from "framer-motion";

export function Photography( {
    props
} ) {

    const [color, setColor] = useState([236, 0])
    const [title, setTitle] = useState(0)
    const [margin, setMargin] = useState("calc(50vh)")

    const ref = useRef(null)
    const isInView = useInView(ref)

    var initialHeight = 0;

    document.body.addEventListener('scroll', () => {
        initialHeight = ref.current.offsetTop;
        if ((document.body.scrollTop - initialHeight) >= 0) {
            if (color[0] > 0) {
                setColor([236 - ((document.body.scrollTop - initialHeight) / 3), ((document.body.scrollTop - initialHeight) / 3)])
                setTitle(document.body.scrollTop - initialHeight);
                if (document.body.scrollTop - initialHeight >= 700) {
                    setTitle(700);
                }
                if (document.body.scrollTop - initialHeight >= 350) {
                    setMargin(`calc(50vh - ${(document.body.scrollTop - initialHeight) - 350}px)`);
                    if (((document.body.scrollTop - initialHeight) - 350) >= 500) {
                        setMargin(`calc(50vh - ${500}px)`);
                    }
                }
            }
        } else {
            setColor([236, color[1]]);
            setTitle(0);
        }
    });


    return (
        <PhotographyContainer id="photo" ref={ref} style={{ background: `rgb(${color[0]}, ${color[0]}, ${color[0]})` }}>
            <Title style ={{ marginTop: (title), color: `rgb(${color[1]}, ${color[1]}, ${color[1]})` }}>Photos that innovate</Title>
            <InnerPhotos style={{ marginTop: margin }}>
                <Photo src="_DSC7771.jpg"/>
                <Photo src="_DSC7789.jpg"/>
                <Photo src="_DSC7798.jpg"/>
                <Photo src="DJI_0021.jpg"/>
                <Photo/>
            </InnerPhotos>
        </PhotographyContainer>
    );
}