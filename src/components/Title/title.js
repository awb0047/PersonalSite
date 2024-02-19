import React from "react";
import { TitleContainer, InnerContainer, MainTitle, SubTitle } from "./titleStyle"
import { motion } from 'framer-motion';

export function Title( {
    props
} ) {
    return (
        <TitleContainer>
          <InnerContainer>
            <MainTitle
              initial={{ opacity: 0, y: -30}}
              animate={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3}}
            >
              Hi. I'm Addison. Full-Stack Dev.
            </MainTitle>
            <SubTitle
              initial={{ opacity: 0, y: -30}}
              animate={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3, delay: 0.1}}
            >
              Whatever web application you can dream of. I can build it
            </SubTitle>
          </InnerContainer>
        </TitleContainer>
    );
}