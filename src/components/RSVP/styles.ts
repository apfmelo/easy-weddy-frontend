import styled from 'styled-components'
import { Formik, Form, FormikHelpers } from 'formik'

export const Container = styled.section`
	padding: 2rem 0 3rem;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: #f2f2f2;
	width: 100%;
`
export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 36px;
`
export const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
