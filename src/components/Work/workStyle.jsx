import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`

export const InnerWorkContainer = styled(motion.div)`
    width: 50%;
    width: min(90vw, 1280px);
    height: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        width: 90%;
        flex-direction: column;
        align-items: center;
    }
`