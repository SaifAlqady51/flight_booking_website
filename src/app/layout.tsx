import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registery";
import Navbar from "@components/Nav/Navbar";
import { ReduxProvider } from "@/redux/ReduxProvider";
import Theme from "../Theme/Theme";
import { GlobalStyles } from "@/Theme/ThemeColors";
import { AuthProvider } from "@components/AuthProvider";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tayara",
	description: "flight booking website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>
					<StyledComponentsRegistry>
						<Theme>
							<GlobalStyles />
							<AuthProvider>
								<NextTopLoader color="#b8c0ff" showSpinner={false}/>
								<Navbar />
								{children}
							</AuthProvider>
						</Theme>
					</StyledComponentsRegistry>
				</ReduxProvider>
			</body>
		</html>
	);
}
