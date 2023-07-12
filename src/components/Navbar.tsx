'use client'
import { NavContainer, LeftNavbar,RightNavbar } from '@/styles/Navbar.styles'
import {Name} from '../styles/CompanyName.styles';
import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../public/icons8-paper-plane-94.png'
import { StyledLink } from '@/styles/Link.styles'
import { NavLinks } from '@/styles/NavLinks.styles'
import { SignupButton } from '@/styles/SignupButton.styles'
import { FaUser } from 'react-icons/fa'
import ListIcon from './ListIcon'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div>
      <NavContainer>
        <LeftNavbar>
          <Image src={Logo} width={45} height={45} alt='bird_logo'/>
          <Name>Tayara</Name>
        </LeftNavbar>
        <RightNavbar>
          <NavLinks>
            <li>
              <StyledLink href='/'>Home</StyledLink>
            </li>
            <li>
              <StyledLink href='/about'>About</StyledLink>
            </li>
            <li>
              <StyledLink href='/seats'>Seats</StyledLink>
            </li>

          </NavLinks>

          <SignupButton>
            <FaUser />
            Sign up
          </SignupButton>

          <ListIcon />
  
        </RightNavbar>
      </NavContainer>
    </div>

  )
}

export default Navbar