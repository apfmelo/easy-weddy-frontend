import styled from 'styled-components'

const buttonTheme = {
	background: '#b3d9ff',
	fontColor: '#004d99',
	hover: '#99ccff',
}

export const StyledButton = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 114px;
	font-size: 16px;
	font-weight: 500;
	text-transform: uppercase;
	background-color: ${buttonTheme.background};
	color: ${buttonTheme.fontColor};
	border-radius: 8px;
	border: none;
	margin-top: 1rem;

	span {
		padding: 10px 16px;
	}

	&:hover {
		background-color: ${buttonTheme.hover};
		cursor: pointer;
	}
`
