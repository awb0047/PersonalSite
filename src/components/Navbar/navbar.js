import React, { useState } from "react";
import { NavContainer, NavInner, LinksContainer, NavLink, Selected } from './navbarStyle'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { Switch } from '../Small Components/switch'

export function NavBar( {
    theme, setTheme
} ) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const handleSelect = (index) => {
        setActiveIndex(index);
    }

    const navItems = [
        { text: "Home", path: "/" },
        { text: "About", path: "/about" },
        { text: "FAQ", path: "/faq" }
    ];

    const navbarScrolled = () => {
        if (window.scrollY >= 100)
        {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', navbarScrolled);

    return (
        <NavContainer>
            <NavInner>
                <LinksContainer className={`${scrolled ? "Scrolled" : ""}`}>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            onClick={() => handleSelect(index)}
                            className={`${index === activeIndex ? "Active" : ""}`}>
                            {item.text}
                        </NavLink>
                    ))}
                    <NavLink
                            onClick={onOpen}>
                            Contact
                    </NavLink>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Contact Me!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <div>
                                <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input ref={initialRef} placeholder='First name' />
                                </FormControl>

                                <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder='Last name' />
                                </FormControl>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                            Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Selected/>
                    <Switch isOn={theme} setIsOn={setTheme}/>
                </LinksContainer>
            </NavInner>
        </NavContainer>
    );
}