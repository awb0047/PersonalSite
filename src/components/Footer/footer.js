import { FooterContainer, InnerFooterContainer, Copyright } from './footerStyle'

export function Footer( {
    theme, setTheme
} ) {

    return (
        <FooterContainer>
            <InnerFooterContainer>
                <Copyright>Created by Addison Barrow © 2025</Copyright>
            </InnerFooterContainer>
        </FooterContainer>
    );
}