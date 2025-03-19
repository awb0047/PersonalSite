import { FooterContainer, InnerFooterContainer, LinksContainer, Link, LinkLogo, Copyright } from './footerStyle'
import { ThemeContext } from "../../components/App/App";
import { useContext } from "react";

export function Footer( {
    props
} ) {

    const theme = useContext(ThemeContext);

    let githubPath = theme === false ? "images/git_dark.png" : "images/git_light.png";
    let linkedinPath = theme === false ? "images/linkedin.png" : "images/linkedin.png";
    let xPath = theme === false ? "images/x.png" : "images/x.png";

    return (
        <FooterContainer>
            <InnerFooterContainer>
                <LinksContainer>
                    <Link href={"https://github.com/awb0047"}>
                        <LinkLogo src={githubPath}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/addisonbarrow/"}>
                        <LinkLogo src="images/linkedin.png"/>
                    </Link>
                    <Link href={"https://x.com/addisonwbarrow"}>
                        <LinkLogo src="images/x.png"/>
                    </Link>
                </LinksContainer>
                <Copyright>Created by Addison Barrow © 2025</Copyright>
            </InnerFooterContainer>
        </FooterContainer>
    );
}