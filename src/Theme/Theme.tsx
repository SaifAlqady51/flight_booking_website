"use client";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./ThemeColors";

import {useAppSelector } from "@/redux/store";
import { ReactNode } from "react";

interface ThemeProviderProps {}

const Theme = ({ children }: { children: ReactNode }) => {
	const theme = useAppSelector((state) => state.toggleTheme.theme);

	return (
		<ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
			{/* @ts-ignore */}
			{children}
		</ThemeProvider>
	);
};

export default Theme;
