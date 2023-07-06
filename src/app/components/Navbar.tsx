'use client'
import { NavContainer, LeftNavbar,RightNavbar } from '@/styles/Navbar.styles'
import {Name} from '../../styles/CompanyName.styles'
import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../../public/icons8-paper-plane-94.png'
import Link from 'next/link'
interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <NavContainer>
      <LeftNavbar>
        <Image src={Logo} width={45} height={45} alt='bird_logo'/>
        <Name>Tayara</Name>
      </LeftNavbar>
      <RightNavbar>
        <ul>
          <li>
            <Link href='/' >Home</Link>
          </li>
          <li>
            <Link href='/About' >About</Link>
          </li>
          <li>
            <Link href='/Seats' >Seats</Link>
          </li>
        </ul>
      </RightNavbar>
    </NavContainer>
  )
}

export default Navbar