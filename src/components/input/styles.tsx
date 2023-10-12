import styled from 'styled-components'
import { Field } from 'formik'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 0.5rem;
	gap: 0.5rem;
`
export const ErrorSpan = styled.span`
	font-size: 12px;
	color: #b40000;
`
export const InputLabel = styled.label``

export const StyledField = styled(Field)`
	width: 100%;
	padding: 0.5rem;
`
