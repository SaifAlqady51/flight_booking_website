'use client'
import {PiSunFill,PiMoonFill} from 'react-icons/pi'
import { ListIconContainer, StyledThemeToggler } from '@/styles/NavStyles/ThemeToggler.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { switchTheme } from '@/redux/features/toggleTheme-slice';
import {useAnimate} from 'framer-motion'


interface ThemeTogglerProps {
  
}

const ThemeToggler = () => {
  const [scope, animate] = useAnimate();

  // theme is a state that change the theme extracted from redux
  const theme = useAppSelector((state) => state.toggleTheme.theme)
  // dispatch is the callback to be called when the theme is changed
  const dispatch = useDispatch<AppDispatch>();

  const clickIcon = () => {
    //extract switchTheme reducer from redux
    dispatch(switchTheme());

    animate(scope.current,{rotate:[0,360]})
  }

  return (

    <ListIconContainer  ref={scope}>

      <StyledThemeToggler  >

        {theme === 'dark'? <PiSunFill onClick={clickIcon}/> : < PiMoonFill onClick={clickIcon} />}
      </StyledThemeToggler>

    </ListIconContainer>

  )
}

export default ThemeToggler