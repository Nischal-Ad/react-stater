import styled, { createGlobalStyle, css } from 'styled-components';
import '@Styles/Root.css';

const globalCss = css`
	html {
		scroll-behavior: smooth;
	}

	body {
		margin: 0;
		padding: 0;
		min-height: var(--height);
	}

	* {
		font-family: var(--ff-poppins) !important;
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;
