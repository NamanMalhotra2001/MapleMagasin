import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--lightGrey: #a1a1a1;
		--medGrey: #4d4d4d;
		--darkGrey: #2c2c2c;

		--font1: 'Caveat';
		--font2: 'Indie Flower';
		--font3: 'Open Sans';
		--font4: 'Pacifico';
		--font5: 'Quicksand';

		--maxHeight: 93vh;
		--minHeight: 63vh;
	}

	* {
		margin: 0;
		box-sizing: border-box;
		font-family: var(--font3), sans-serif;
	}

	body {
		margin: 0;
		padding: 0;

		h1 {
			font-size: var(--fontSuperBig);
			font-weight: 600;
		}

		h3 {
			font-size: var(--fontMed);
			font-weight: 600;
		}

		p {
			font-size: var(--fontSmall);
		}
	}
`;
