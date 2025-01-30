import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrqContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InnerFrqContainer = styled(motion.div)`
    width: min(90vw, 800px);;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`