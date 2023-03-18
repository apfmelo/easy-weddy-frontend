import { Field } from 'formik'
import { InputWrapper } from './styles'

interface Props {
	label: string
	id: string
	name: string
	placeholder: string
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
			<label htmlFor={id}>{label}</label>
			<Field id={id} name={name} placeholder={placeholder} type={type} />
			{errors[id] && touched[id] ? <span>{errors[id]}</span> : null}
		</InputWrapper>
	)
}
