import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    //background: var(--title-primary);
`
export const InnerFooterContainer = styled.div`
    width: min(90vw, 1280px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LinksContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
`

export const Link = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    margin: 0px 15px;
    justify-content: center;
    align-items: center;
`

export const LinkLogo = styled.img`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`

export const Main = styled.h1`
    font-family: var(--primary-font);
    font-weight: bolder;
    color: var(--text-primary);
    font-size: min(3vw, 20px);
`

export const Copyright = styled.h2`
    font-family: var(--primary-font);
    font-weight: lighter;
    color: var(--text-secondary);
    font-size: min(15px, 15px);
`