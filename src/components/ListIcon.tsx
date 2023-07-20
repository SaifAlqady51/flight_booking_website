import { FC } from 'react'
import { BsList } from "react-icons/bs";
import { StyledIcon } from '@/styles/ListIcon.styles';
import { AppDispatch, useAppSelector } from '@/redux/store';
import {toggleSwitch} from '../redux/features/toggleSideNav-slice'
import { useDispatch } from 'react-redux';
import {AiOutlineClose} from 'react-icons/ai'



const ListIcon: FC = ({}) => {
    // active state from redux
    const active = useAppSelector((state) => state.toggleSideNav.active)
    // dispatch is called to import toggleSwitch from redux
    const dispatch = useDispatch<AppDispatch>();


  return (      
    <StyledIcon >
      {active? <BsList onClick={() => dispatch(toggleSwitch())}/> : < AiOutlineClose onClick={() => dispatch(toggleSwitch())}/>}
    </StyledIcon>
  )
}

export default ListIcon