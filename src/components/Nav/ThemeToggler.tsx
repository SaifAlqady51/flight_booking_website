'use client'
import {PiSunFill,PiMoonFill} from 'react-icons/pi'
import { StyledThemeToggler } from '@/styles/NavStyles/ThemeToggler.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { switchTheme } from '@/redux/features/toggleTheme-slice';


interface ThemeTogglerProps {
  
}

const ThemeToggler = () => {

  const theme = useAppSelector((state) => state.toggleTheme.theme)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledThemeToggler >
      {theme === 'dark'? <PiSunFill onClick={() => dispatch(switchTheme())}/> : < PiMoonFill onClick={() => dispatch(switchTheme())} />}

    </StyledThemeToggler>
  )
}

export default ThemeToggler