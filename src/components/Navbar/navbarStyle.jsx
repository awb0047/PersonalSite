import styled from 'styled-components'
import { Link } from "react-router-dom"

export const NavContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 50;

    .Scrolled {
        background: rgba(248,247,243,0.2);
    }
`

export const NavInner = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 50;

    .Scrolled {
        background: var(--navbar);
    }
`

export const LinksContainer = styled.div`
    position: absolute;
    width: auto;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    transition: 0.3s;

    @media (max-width: 900px) {
        display: none;
    }
`

export const Selected = styled.div`
    position: absolute;
    width: 100px;
    height: 35px;
    left: 12px;
    background: rgba(255,255,255,0.6);
    border-radius: 25px;
    transition: 0.3s;
    z-index: 1;
`

export const NavLink = styled(Link)`

    font-size: 17px;
    font-weight: bold;
    color: var(--text-secondary);
    margin: 0 30px;
    text-decoration: none;
    z-index: 5;

    &:nth-child(1).Active ~ ${Selected}{
        transform: translateX(calc(80px * 0));
        width: 85px;
    }

    &:nth-child(2).Active ~ ${Selected}{
        transform: translateX(calc(109px * 1));
        width: 85px;
    }

    &:nth-child(3).Active ~ ${Selected}{
        transform: translateX(calc(110px * 2));
        width: 65px;
    }
`
//          OLD NAV BAR         //
//
// export const NavContainer = styled.div`
//     width: 100%;
//     height: 100px;
//     display: flex;
//     justify-content: center;
//     position: absolute;
//     z-index: 5;
// `

// export const InnerNav = styled.div`
//     width: 1800px;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media (max-width: 1800px) {
//         width: 100%;
//     }
// `

// export const Logo = styled.img`
//     height: 70%;
//     margin-right: auto;
//     margin-left: 30px;

//     @media (max-width: 600px) {
//         height: 12vw;
//     }
// `

// export const LinksContainer = styled.div`
//     width: auto;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: auto;
//     margin-right: 50px;

//     @media (max-width: 900px) {
//         display: none;
//     }
// `

// export const NavLink = styled.a`
//     font-size: 15px;
//     font-weight: lighter;
//     color: white;
//     margin: 0 20px;
//     text-decoration: none;

//     @media (max-width: 900px) {
//         margin-bottom: 30px;
//     }
// `

// export const Hamburger = styled.div`
//     width: auto;
//     height: auto;
//     margin-right: 30px;
//     display: none;

//     @media (max-width: 900px) {
//         display: block;
//     }
// `

// export const LinksContainerMenu = styled.div`
//     width: auto;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `