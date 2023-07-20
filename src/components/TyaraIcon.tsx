import { FC } from 'react'
import Image from 'next/image'
import Logo from '../../public/icons8-paper-plane-94.png'

interface ImageProps {
  
}

const TyaraIcon: FC<ImageProps> = ({}) => {
  return <Image  src={Logo} alt='tyara-icon'/>
}

export default TyaraIcon