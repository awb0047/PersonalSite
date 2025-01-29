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
    width: min(90%, 500px);
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    transition: 0.3s;

    @media (max-width: 900px) {
        width: 90vw;
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
    margin: 0 auto;
    text-decoration: none;
    z-index: 5;

    &:nth-child(1).Active ~ ${Selected}{
        left: 1.5%;
        //transform: translateX(calc(80px * 0));
        width: 18%;
    }

    &:nth-child(2).Active ~ ${Selected}{
        left: 22%;
        //transform: translateX(calc(109px * 1));
        width: 18%;
    }

    &:nth-child(3).Active ~ ${Selected}{
        left: 43%;
        //transform: translateX(calc(110px * 2));
        width: calc(14%);
    }
`