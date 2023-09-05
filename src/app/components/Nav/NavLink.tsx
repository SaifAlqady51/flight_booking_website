"use client";

import { StyledLink } from '@/styles/NavStyles/StyledLink.styles'
import { usePathname } from "next/navigation";
import { Link } from "@lib/router-events";
export default function NavLink({href,children}:React.PropsWithChildren<{href:string}>){
	const pathname = usePathname()

	return (
		<StyledLink href={href}>
			{children}
		</StyledLink>
	)

}
