import React from "react";
import { SwitchContainer, Handle } from "./switchStyle"

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