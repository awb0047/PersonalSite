import styled from "styled-components";

export const TextCardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
    height: 500px;
    padding-bottom: 50px;
`

export const InnerContainer = styled.div`
    width: 60%;
    height: 100%;
    text-align: center;
    position: relative;
    padding-top: 30px;
`

export const TextCardTitle = styled.h1`
    font-family: var(--primary-font);
    font-weight: bolder;
    color: var(--text-primary);
    font-size: 20px;

    @media screen and (max-width: 700px){
        font-size: 5vw;
    }
`

export const TextCardText = styled.h2`
    font-family: var(--primary-font);
    font-weight: 600;
    color: var(--text-secondary);
    font-size: 20px;
    margin-top: 30px;
    line-height: 1.5;

    @media screen and (max-width: 700px){
        font-size: 3vw;
    }
`

export const Links = styled.div`
    width: 95%;
    height: 50px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
`

export const Link = styled.a`
    width: 50%;
    height: 50px;
    margin: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkText = styled.div`
    font-family: var(--primary-font);
    font-weight: bold;
    color: var(--text-primary);
    font-size: 20px;
`

export const LinkLogo = styled.div`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin-left: 10px;
`

export function TextCard( {
    Title, Text, GitLink, DemoLink
} ) {

    return (
        <TextCardContainer>
            <InnerContainer>
                <TextCardTitle>{Title}</TextCardTitle>
                <TextCardText>{Text}</TextCardText>
                <Links>
                    <Link href={GitLink}>
                        <LinkText>GitHub</LinkText>
                        <LinkLogo style={{ backgroundImage: "url(github-mark.png)"}}/>
                    </Link>
                    <Link href={DemoLink}>
                        <LinkText>Demo</LinkText>
                        <LinkLogo style={{ backgroundImage: "url(link.png)"}}/>
                    </Link>
                </Links>
            </InnerContainer>
        </TextCardContainer>
    );
}