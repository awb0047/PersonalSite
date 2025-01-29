import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background: var(--title-primary);
`
export const InnerFooterContainer = styled.div`
    width: min(90vw, 1280px);
    height: 100%;
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