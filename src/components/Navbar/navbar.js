import React from "react";
import { NavContainer, InnerNav, Logo, LinksContainer, NavLink, Hamburger, LinksContainerMenu } from './navbarStyle'
import { Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, useToast } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export function NavBar( {
    props
} ) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const handleClick = () => {
        onOpen()
    }

    const contactClick = () => {
        toast({
            title: 'Try Again Later.',
            description: "Contact method will be added in the near future.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <NavContainer>
            <InnerNav>
                <Logo src={"image.png"}/>
                <LinksContainer>
                    <NavLink href="#home">HOME</NavLink>
                    <NavLink href="/#faq">FAQ</NavLink>
                    <NavLink href="/#about">ABOUT</NavLink>
                    <NavLink onClick={contactClick}>CONTACT</NavLink>
                </LinksContainer>
                <Hamburger>
                    <IconButton onClick={() => handleClick()} icon={<HamburgerIcon/>} size="lg"/>
                </Hamburger>
                <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody bg="#0D0F11">
                            <LinksContainerMenu>
                                <NavLink href="/#home">HOME</NavLink>
                                <NavLink href="/#faq">FAQ</NavLink>
                                <NavLink href="/#">ABOUT</NavLink>
                                <NavLink onClick={contactClick}>CONTACT</NavLink>
                            </LinksContainerMenu>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </InnerNav>
        </NavContainer>
    );
}