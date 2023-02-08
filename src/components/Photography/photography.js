import React, { useState, useRef } from "react";
import { PhotographyContainer, Title, InnerPhotos, Photo, Test, GridLeft, GridMiddle, GridRight, TitleSequence } from "./photographyStyle"
import { motion, useScroll, useInView } from "framer-motion";

export function Photography( {
    props
} ) {

    const [loaded, setLoaded] = useState(false);

    const [color, setColor] = useState([236, 0])
    const [title, setTitle] = useState('static')
    const [titleMargin, setTitleMargin] = useState(0)
    const [margin, setMargin] = useState("calc(50vh)")

    const ref = useRef(null)
    const isInView = useInView(ref)

    var initialHeight = 0;

    var imageList = ["_DSC7771.jpg", "_DSC7798.jpg", "_DSC7789.jpg", "DJI_0021.jpg", "DJI_0021.jpg"]

    function componentDidMount() {
        imageList.forEach((image) => {
            new Photo().src = image;
        });
    }

    document.body.addEventListener('scroll', () => {
        initialHeight = ref.current.offsetTop;

        if ((document.body.scrollTop - initialHeight) >= 0) {

            if (color[0] > 0) {
                setColor([236 - ((document.body.scrollTop - initialHeight) / 3), ((document.body.scrollTop - initialHeight) / 3)])
                setTitle('fixed');
                if (document.body.scrollTop - initialHeight >= (document.documentElement.clientHeight / 2)) {
                    setTitle('static');
                    setTitleMargin('calc(101.5vh)');
                    if (document.documentElement.clientWidth <= 1000) {
                        setTitleMargin('calc(100vh - 3vw)');
                    }
                } else {
                    setTitleMargin(0);
                }
                if (document.body.scrollTop - initialHeight >= 350) {
                    setMargin(`calc(50vh - ${(document.body.scrollTop - initialHeight) - 350}px)`);
                    if (((document.body.scrollTop - initialHeight) - 350) >= 400) {
                        setMargin(`calc(50vh - ${400}px)`);
                    }
                }
            }
        } else {
            setColor([236, color[1]]);
            setTitle('static');
            setTitleMargin(0);
        }
    });

    return (
        <PhotographyContainer id="photo" ref={ref} style={{ background: `rgb(${color[0]}, ${color[0]}, ${color[0]})` }}>
            {/* <Title style ={{ marginTop: (title), color: `rgb(${color[1]}, ${color[1]}, ${color[1]})` }}>Photos that innovate</Title> */}
            <TitleSequence>
                <Title style ={{ position: (title), marginTop: (titleMargin), color: `rgb(${color[1]}, ${color[1]}, ${color[1]})` }}>Photos that innovate</Title>
            </TitleSequence>
            <InnerPhotos style={{ marginTop: margin }}>
                <GridLeft>
                    <Photo src="_DSC7771.jpg"/>
                </GridLeft>
                <GridMiddle>
                    <Photo src="_DSC7798.jpg"/>
                </GridMiddle>
                <GridRight>
                    <Photo src="_DSC7789.jpg"/>
                    <Photo src="DJI_0021.jpg"/>
                </GridRight>
                {/* {
                    imageList.map((photo) => (
                        <Photo src={photo}/>
                    ))
                } */}
            </InnerPhotos>

            <Title style ={{ margin: "200px 0", color: `white` }}>More Coming Soon...</Title>
        </PhotographyContainer>
    );
}