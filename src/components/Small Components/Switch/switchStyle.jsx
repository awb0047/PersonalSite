import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitchContainer = styled.div`
    width: 60px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.4);
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
