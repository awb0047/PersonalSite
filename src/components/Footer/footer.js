import { FooterContainer, InnerFooterContainer, LinksContainer, Link, LinkLogo, Copyright } from './footerStyle'

export function Footer( {
    theme, setTheme
} ) {

    return (
        <FooterContainer>
            <InnerFooterContainer>
                <LinksContainer>
                    <Link href={"https://github.com/awb0047"}>
                        <LinkLogo style={{ backgroundImage: "url(images/github-mark.png)"}}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/addisonbarrow/"}>
                        <LinkLogo style={{ backgroundImage: "url(images/linkedin.png)"}}/>
                    </Link>
                    <Link href={"https://x.com/addisonwbarrow"}>
                        <LinkLogo style={{ backgroundImage: "url(images/x.png)"}}/>
                    </Link>
                </LinksContainer>
                <Copyright>Created by Addison Barrow © 2025</Copyright>
            </InnerFooterContainer>
        </FooterContainer>
    );
}