import { FC } from 'react'
import { BsList } from "react-icons/bs";
import { ListIconContainer } from '@/styles/ListIconContainer';
import { AppDispatch, useAppSelector } from '@/redux/store';
import {toggleSwitch} from '../redux/features/toggleSideNav-slice'
import { useDispatch } from 'react-redux';




const ListIcon: FC = ({}) => {
    // active state from redux
    const active = useAppSelector((state) => state.toggleSideNav.active)
    // dispatch is called to import toggleSwitch from redux
    const dispatch = useDispatch<AppDispatch>();


  return (
    <ListIconContainer toggle={active} >
        <BsList onClick={() => dispatch(toggleSwitch())}/>
    </ListIconContainer>
  )
}

export default ListIcon