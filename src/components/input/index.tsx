import { Field } from 'formik'
import { InputWrapper, ErrorSpan, InputLabel, StyledField } from './styles'

interface Props {
	label: string
	id: string
	name: string
	placeholder?: string
	type: string
	errors: { [x: string]: string }
	touched: { [x: string]: boolean }
}

export const Input = ({
	id,
	label,
	name,
	placeholder,
	type,
	errors,
	touched,
}: Props) => {
	return (
		<InputWrapper>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<StyledField id={id} name={name} placeholder={placeholder} type={type} />
			{errors[id] && touched[id] ? <ErrorSpan>{errors[id]}</ErrorSpan> : null}
		</InputWrapper>
	)
}
