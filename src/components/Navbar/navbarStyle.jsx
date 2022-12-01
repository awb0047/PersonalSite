import styled from 'styled-components'

const Colors = {
    mainbg: '#0D0F11',
    bgaccent: '#121518',
    logoblue: '#1F2328',
    logogreen: '#282D34',
    discordblue: '#333A42',
};

export const NavContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 5;
`

export const InnerNav = styled.div`
    width: 1800px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1800px) {
        width: 100%;
    }
`

export const Logo = styled.img`
    height: 80%;
    margin-right: auto;
    margin-left: 30px;
`

export const LinksContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 50px;

    @media (max-width: 900px) {
        display: none;
    }
`

export const NavLink = styled.a`
    font-size: 15px;
    font-weight: lighter;
    color: white;
    margin: 0 20px;
    text-decoration: none;

    @media (max-width: 900px) {
        margin-bottom: 30px;
    }
`

export const Hamburger = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 30px;
    display: none;

    @media (max-width: 900px) {
        display: block;
    }
`

export const LinksContainerMenu = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`