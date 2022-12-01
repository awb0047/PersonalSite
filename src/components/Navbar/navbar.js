import React from "react";
import { NavContainer, InnerNav, Logo, LinksContainer, NavLink, Hamburger, LinksContainerMenu } from './navbarStyle'
import { Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export function NavBar( {
    props
} ) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }

    return (
        <NavContainer>
            <InnerNav>
                <Logo src={"signature.png"}/>
                <LinksContainer>
                    <NavLink href="/#home">HOME</NavLink>
                    <NavLink href="/#faq">FAQ</NavLink>
                    <NavLink href="/#">ABOUT</NavLink>
                    <NavLink href="/#">CONTACT</NavLink>
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
                                <NavLink href="/#">CONTACT</NavLink>
                            </LinksContainerMenu>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </InnerNav>
        </NavContainer>
    );
}