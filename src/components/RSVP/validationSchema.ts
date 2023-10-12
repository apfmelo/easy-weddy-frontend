import * as Yup from 'yup'

export const RSVPSchema = Yup.object().shape({
	name: Yup.string().required('Campo obrigatório').min(3),
	email: Yup.string()
		.email('Email inválido')
		.matches(/^(?!.*@[^,]*,)/)
		.required('Campo obrigatório'),
	qtyPlusGuests: Yup.number().moreThan(-1, 'Número deve ser = ou > 0'),
	isConfirmed: Yup.string().required(
		'Por favor, selecione se você vai comparecer ao casamento'
	),
})
