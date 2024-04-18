import React from "react";
import { TitleContainer, InnerContainer, MainTitle, SubTitle } from "./titleStyle"
import { motion } from 'framer-motion';

export function Title( {
    props, main, sub
} ) {
    return (
        <TitleContainer>
          <InnerContainer>
            <MainTitle
              initial={{ opacity: 0, y: -30}}
              animate={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3}}
            >
              {main}
            </MainTitle>
            <SubTitle
              initial={{ opacity: 0, y: -30}}
              animate={{ opacity: 1, y: 0 }}
              transition={{duration: 0.3, delay: 0.1}}
            >
              {sub}
            </SubTitle>
          </InnerContainer>
        </TitleContainer>
    );
}