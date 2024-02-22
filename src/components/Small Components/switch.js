import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

export const SwitchContainer = styled.div`
    width: 60px;
    height: 30px;
    background-color: rgba(66,69,73, 0.5);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;

    &[data-isOn="true"] {
        justify-content: flex-end;
    }
`

export const Handle = styled(motion.div)`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 40px;

    &[data-isOn="true"] {
        background-color: black;
    }
`

export function Switch( {
    isOn, setIsOn
} ) {
    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <SwitchContainer data-isOn={isOn} onClick={toggleSwitch}>
            <Handle data-isOn={isOn} layout transition={{ type: "spring", stiffness: 700, damping: 30 }}/>
        </SwitchContainer>
    );
}