import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FrqContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 200px;
`

export const InnerFrqContainer = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`