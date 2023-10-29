'use client';
import {
    NavContainer,
    LeftNavbar,
    RightNavbar,
    HeroLink,
} from '@/styles/NavStyles/Navbar.styles';
import { Name } from '@/styles/NavStyles/CompanyName.styles';
import { FC } from 'react';
import Logo from '@public/static/images/globe.png';
import { NavLinks } from '@/styles/NavStyles/NavLinks.styles';
import ListIcon from './ListIcon';
import ThemeToggler from './ThemeToggler';
import { TayaraIcon } from '@/styles/NavStyles/TayaraIcon.styles';
import { useAppSelector } from '@/redux/store';
import { StyledLi } from '@/styles/NavStyles/StyledLi.styles';
import { StyledLink } from '@/styles/NavStyles/StyledLink.styles';
import Signup from './Signup';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    // active state from redux
    const active: boolean = useAppSelector(
        (state) => state.toggleSideNav.active,
    );
    console.log(active);

    return (
        <div>
            <NavContainer>
                <LeftNavbar>
                    <HeroLink href='/'>
                        <TayaraIcon src={Logo} alt='tyara pic' />
                        <Name>Tayara</Name>
                    </HeroLink>
                </LeftNavbar>
                <RightNavbar>
                    <ThemeToggler />

                    <NavLinks toggle={active}>
                        <StyledLi>
                            <StyledLink href='/'>Home</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink href='/about'>About</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <StyledLink href='/flights'>Flights</StyledLink>
                        </StyledLi>
                        <StyledLi>
                            <Signup />
                        </StyledLi>
                    </NavLinks>

                    <ListIcon />
                </RightNavbar>
            </NavContainer>
        </div>
    );
};

export default Navbar;
