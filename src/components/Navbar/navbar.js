import React, { useState } from "react";
import { NavContainer, NavInner, LinksContainer, NavLink, Selected } from './navbarStyle'
import { useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,  ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button, Textarea } from '@chakra-ui/react'
import { Switch } from '../Small Components/switch'

export function NavBar( {
    theme, setTheme
} ) {
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const contactClick = () => {
        toast({
            title: 'Try Again Later.',
            description: "Due to spam this feature has been put on temporary hold. Please use LinkedIn for contacting.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.message) errors.message = "Message is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            // Proceed with form submission or further logic
            console.log("Form submitted:", formData);
            onClose();
        }
    };

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
                            onClick={() => contactClick()}>
                            {/* onClick={onOpen}> */}
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

                        <ModalBody>
                            <div>
                                <FormControl isInvalid={formErrors.firstName}>
                                    <FormLabel>First name</FormLabel>
                                    <Input
                                        ref={initialRef}
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>

                                <FormControl mt={4} isInvalid={formErrors.lastName}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>

                                <FormControl mt={4} isInvalid={formErrors.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>

                                <FormControl mt={4} isInvalid={formErrors.message}>
                                    <FormLabel>What would you like to say?</FormLabel>
                                    <Textarea
                                        name="message"
                                        h={150}
                                        placeholder="Type message here"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                </FormControl>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleSave}>
                                Send
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