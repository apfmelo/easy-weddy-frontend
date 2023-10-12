import styled from 'styled-components'

const theme = {
	success: {
		background: '#d9e8d3',
		color: '#54a05b',
	},
	warning: {
		background: '#f6e8cc',
		color: '#e49d0f',
	},
	error: {
		background: '#ffdfdf',
		color: '#e4313c',
	},
	genericError: {
		background: '#ffdfdf',
		color: '#e4313c',
	},
}

export const StyledAlert = styled.div<{ type: keyof typeof theme }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-width: 114px;
	font-size: 16px;
	font-weight: 500;
	text-transform: inherit;
	border-radius: 8px;
	padding: 1rem 2rem;
	margin: 0 0 3rem 0;
	align-self: center;

	max-width: 600px;
	${({ type }) => ({
		'background-color': theme[type].background,
		color: theme[type].color,
	})}
`
