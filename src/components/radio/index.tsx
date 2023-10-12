import { Field } from 'formik'
import { RadioWrapper } from './styles'
import { ErrorSpan } from '../input/styles'

interface Props {
	label: string
	id: string
	name: string
	errors: { [x: string]: string }
	touched: { [x: string]: boolean }
	options?: { label: string; value: string }[]
}

export const Radio = ({ id, label, name, errors, touched, options }: Props) => {
	return (
		<>
			<div id="my-radio-group">{label}</div>
			<RadioWrapper role="group" aria-labelledby="my-radio-group">
				{options?.map((option) => (
					<label key={option.label}>
						<Field type="radio" name={name} value={option.value} />
						{option.label}
					</label>
				))}
			</RadioWrapper>
			{errors[id] && touched[id] ? <ErrorSpan>{errors[id]}</ErrorSpan> : null}
		</>
	)
}
