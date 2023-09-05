import styled from "styled-components";
import Image from "next/image";
interface MessageImageProps {
	heightMobile?: string;
	widthMobile?: string;
	widthTab?: string;
	widthMobileSmall?: string;
}

export const MessageImage = styled(Image)<MessageImageProps>`
	border-radius: 30px;

	@media (max-width: 1420px) {
		width: ${(props) => props.widthTab};
	}

	@media (max-width: 1200px) {
		width: ${(props) => props.widthMobile};
	}

	@media (max-width: 750px) {
		height: ${(props) => props.heightMobile};
		width: ${(props) => props.widthTab};
	}

	@media (max-width: 600px) {
		width: ${(props) => props.widthMobileSmall};
	}
`;
