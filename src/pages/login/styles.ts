import styled from 'styled-components'
import { Form } from 'formik'

export const Container = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 100vh;
`
export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.secondary};
`
export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
