"use client"
import { ThemeProvider } from "styled-components";
import {lightMode, darkMode } from "./ThemeColors";
import { GlobalStyles } from "@mui/material";

import { useDispatch } from "react-redux";
import { AppDispatch,useAppSelector } from "@/redux/store";
import { ReactNode, useState } from "react";
import ThemeToggler from "@/components/Nav/ThemeToggler";
import { switchTheme } from "@/redux/features/toggleTheme-slice";


interface ThemeProviderProps {

  
}

const Theme = ({children}:{children:ReactNode}) => {
  
  const theme = useAppSelector((state) => state.toggleTheme.theme)
  const dispatch = useDispatch<AppDispatch>();


  return(
    <ThemeProvider theme={theme === 'light'? lightMode: darkMode}>

      {/* @ts-ignore */}
      {children}


    </ThemeProvider>
  )
  
}

export default Theme