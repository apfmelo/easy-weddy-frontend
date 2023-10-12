import { Formik } from 'formik'
import { Container, Title, StyledForm } from './styles'
import { Input, Button, Radio, Alert } from '@/components'
import { RSVPSchema } from './validationSchema'
import { useState } from 'react'
import { updateGuest } from '@/api/easyWeddyApi'
import { Props } from './types'

interface Values {
	email: string
	name: string
	qtyCompanions: number
	isConfirmed: string
}

const initialValues = {
	email: '',
	name: '',
	qtyCompanions: 0,
	isConfirmed: '',
}

type alertStatusType = 'success' | 'error'

const RSVP = (content: Props) => {
	const {
		fianceId,
		title,
		button,
		alert,
		name,
		email,
		isConfirmed,
		qtyCompanions,
	} = content

	const [closeAlert, setCloseAlert] = useState(true)
	const [statusAlert, setStatusAlert] = useState<alertStatusType>('success')

	const handleCloseAlert = () => setCloseAlert(true)

	const handleAlertMessage = () => {
		const alertMessage = {
			success: alert.success,
			error: alert.error,
		}
		return alertMessage[statusAlert]
	}

	const handleSubmit = (values: Values) => {
		const guestId = fianceId + '-' + values.email
		const guest = { fianceId, ...values }

		updateGuest(guestId, guest)
			.then(() => {
				setStatusAlert('success')
				setCloseAlert(false)
			})
			.catch(() => {
				setCloseAlert(false)
				setStatusAlert('error')
			})
	}

	return (
		<Container>
			{!closeAlert && (
				<Alert
					type={statusAlert}
					message={handleAlertMessage()}
					handleCloseAlert={handleCloseAlert}
				/>
			)}

			<Title>{title}</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={RSVPSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<StyledForm>
						<Input
							id="name"
							name="name"
							label={name.label}
							placeholder={name.placeholder}
							type={name.type}
							errors={errors}
							touched={touched}
						/>
						<Input
							id="email"
							name="email"
							label={email.label}
							placeholder={email.placeholder}
							type={email.type}
							errors={errors}
							touched={touched}
						/>
						<Radio
							id="isConfirmed"
							name="isConfirmed"
							label={isConfirmed.label}
							options={isConfirmed.options}
							errors={errors}
							touched={touched}
						/>
						<Input
							id="qtyCompanions"
							name="qtyCompanions"
							label={qtyCompanions.label}
							placeholder={qtyCompanions.placeholder}
							type={qtyCompanions.type}
							errors={errors}
							touched={touched}
						/>
						<Button type="submit">{button}</Button>
					</StyledForm>
				)}
			</Formik>
		</Container>
	)
}

export default RSVP
