import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 20px 40px;
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 30px;
		background-color: black;
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 3px grey;
		border-radius: 5px;
		background-color: $salon-grey;
	  }
	  
	  ::-webkit-scrollbar-thumb {
		background: black;
		border-radius: 5px;
	  }
	  
	  ::-webkit-scrollbar-thumb:hover {
		opacity: 80%;
	  }

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;

export const BodyContainer = styled.div`
  background: #e5e5e5;
  z-index: -1;
  border-radius: 3px;
  margin: 0;
  margin: 1% 2%;
  padding: 2% 3%;
  height: 89vh;
  border: 30px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
