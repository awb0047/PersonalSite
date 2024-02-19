import React from "react";
import { AboutContainer, InnerAboutContainer, Line, TitleContainer, Title, Dot, Description } from "./aboutStyle"
import { motion } from 'framer-motion';

export function About( {
    props
} ) {

    function FadeInWhenVisible({ children }) {
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
          >
            {children}
          </motion.div>
        );
      }

    return (
        <AboutContainer id="about">
          <Line/>
          <InnerAboutContainer>
            <TitleContainer>
                <FadeInWhenVisible>
                    <Title>HELLO WORLD</Title>
                </FadeInWhenVisible>
                <Dot
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 } }
                        variants={{
                          visible: { opacity: 1,
                                    scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 270, 270, 270],
                                    borderRadius: ["20%", "20%", "50%", "50%", "50%"]
                                    },
                          hidden: { opacity: 0 }
                        }}
                />
                <Dot
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 } }
                        variants={{
                          visible: { opacity: 1,
                                    scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 270, 270, 270],
                                    borderRadius: ["20%", "20%", "50%", "50%", "50%"]
                                    },
                          hidden: { opacity: 0 }
                        }}
                />
                <Dot
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 } }
                        variants={{
                          visible: { opacity: 1,
                                    scale: [1, 1.5, 1.5, 1, 1],
                                    rotate: [0, 0, 270, 270, 270],
                                    borderRadius: ["20%", "20%", "50%", "50%", "50%"]
                                    },
                          hidden: { opacity: 0 }
                        }}
                />

            </TitleContainer>
            <Description>Hello there! My name is Addison Barrow and I am a junior full stack developer and photographer. I am currently in my second year of university where I am majoring in software engineering.</Description>
          </InnerAboutContainer>
        </AboutContainer>
    );
}