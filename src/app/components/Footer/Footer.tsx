'use client';
import { StyledFooter, GitHubLink } from '@/styles/FooterStyles/Footer.styles';
import { FaGithub } from 'react-icons/fa';
import { GitHubIconProvider } from '@/styles/NavStyles/ListIcon.styles';

const Footer = () => {
    return (
        <StyledFooter>
            <GitHubLink
                target='_blank'
                href='https://github.com/SaifAlqady51/flight_booking_website'
            >
                contribute with me
                <GitHubIconProvider>
                    <FaGithub />
                </GitHubIconProvider>
            </GitHubLink>
        </StyledFooter>
    );
};

export default Footer;
