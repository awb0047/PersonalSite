import React, { useState } from "react";
import { NavContainer, NavInner, LinksContainer, NavLink, Selected } from './navbarStyle'
import { useToast } from '@chakra-ui/react'
import { Switch } from '../Small Components/switch'

export function NavBar( {
    theme, setTheme
} ) {
    const toast = useToast();

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

    const contactClick = () => {
        toast({
            title: 'Try Again Later.',
            description: "Contact method will be added in the near future.",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })
    }

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
                            to={item.path}
                            onClick={() => handleSelect(index)}
                            className={`${index === activeIndex ? "Active" : ""}`}>
                            {item.text}
                        </NavLink>
                    ))}
                    <NavLink
                            onClick={() => contactClick()}>
                            Contact
                        </NavLink>
                    <Selected/>
                    <Switch isOn={theme} setIsOn={setTheme}/>
                </LinksContainer>
            </NavInner>
        </NavContainer>
    );
}

//      Old Nav Bar
//
// export function NavBar( {
//     props
// } ) {

//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const toast = useToast();

//     const handleClick = () => {
//         onOpen()
//     }

//     const contactClick = () => {
//         toast({
//             title: 'Try Again Later.',
//             description: "Contact method will be added in the near future.",
//             status: 'info',
//             duration: 3000,
//             isClosable: true,
//         })
//     }

//     return (
//         <NavContainer>
//             <InnerNav>
//                 <Logo src={"image.png"}/>
//                 <LinksContainer>
//                     <NavLink href="/">HOME</NavLink>
//                     <NavLink href="/faq">FAQ</NavLink>
//                     <NavLink href="/about">ABOUT</NavLink>
//                     <NavLink onClick={contactClick}>CONTACT</NavLink>
//                 </LinksContainer>
//                 <Hamburger>
//                     <IconButton onClick={() => handleClick()} icon={<HamburgerIcon/>} size="lg"/>
//                 </Hamburger>
//                 <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
//                     <DrawerOverlay />
//                     <DrawerContent>
//                         <DrawerCloseButton />
//                         <DrawerBody bg="#0D0F11">
//                             <LinksContainerMenu>
//                                 <NavLink href="/#home">HOME</NavLink>
//                                 <NavLink href="/#faq">FAQ</NavLink>
//                                 <NavLink href="/#">ABOUT</NavLink>
//                                 <NavLink onClick={contactClick}>CONTACT</NavLink>
//                             </LinksContainerMenu>
//                         </DrawerBody>
//                     </DrawerContent>
//                 </Drawer>
//             </InnerNav>
//         </NavContainer>
//     );
// }