import { FC, useState } from 'react'
import { BsList } from "react-icons/bs";
import { IconContainer } from '@/styles/IconContainer.styles'

interface ListIconProps {
  
}

const ListIcon: FC<ListIconProps> = ({}) => {
    const [open,setOpen] = useState(false)
    console.log(open)

  return (
    <IconContainer open={open} >
        <BsList onClick={() => setOpen(prevState => !prevState)}/>
    </IconContainer>
  )
}

export default ListIcon