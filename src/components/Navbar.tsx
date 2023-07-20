'use client'
import { NavContainer, LeftNavbar,RightNavbar } from '@/styles/Navbar.styles'
import {Name} from '../styles/CompanyName.styles';
import { FC } from 'react'
import Logo from '../../public/globe.png'
import { StyledLink } from '@/styles/StyledLink.styles'
import { NavLinks } from '@/styles/NavLinks.styles'
import ListIcon from './ListIcon'
import ThemeToggler from './ThemeToggler';
import { TayaraIcon } from '@/styles/TayaraIcon.styles';
import { useAppSelector, AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { StyledLi } from '@/styles/StyledLi.styles';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {

      // active state from redux
      const active = useAppSelector((state) => state.toggleSideNav.active)
      console.log(active)
      // dispatch is called to import toggleSwitch from redux
      const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div>

      <NavContainer>
        <LeftNavbar>
          <TayaraIcon src={Logo} alt='tyara pic' />

          <Name>Tayara</Name>
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
              <StyledLink href='/seats'>Seats</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink href='#'>Sign up</StyledLink>
            </StyledLi>
          </NavLinks>



          <ListIcon />
  
        </RightNavbar>
      </NavContainer>
    </div>

  )
}

export default Navbar