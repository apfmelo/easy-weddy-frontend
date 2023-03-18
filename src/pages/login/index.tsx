import { Formik } from 'formik'
import * as Yup from 'yup'
import { Container, Title, StyledForm } from './styles'
import { Input, Button } from '@/components'

const SignupSchema = Yup.object().shape({
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.max(16, "Password can't be longer than 16 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/]{8,}$/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
		)
		.required('Password is required'),
	user: Yup.string()
		.min(6, 'Too Short!')
		.max(50, 'Too Long!')
		.matches(/^\S+$/, 'Usuário inválido!')
		.required('Required'),
	// email: Yup.string().email('Invalid email').required('Required'),
})

interface Values {
	// email: string
	user: string
	password: string
}

const initialValues = {
	// email: '',
	user: '',
	password: '',
}
const Login = () => {
	const handleSubmit = (values: Values) => {
		console.log(values)
	}
	return (
		<Container>
			<Title>Login</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<StyledForm>
						{/* <Input
							id="email"
							name="email"
							label="Email"
							placeholder="john@acme.com"
							type="email"
							errors={errors}
							touched={touched}
						/> */}
						<Input
							id="user"
							name="user"
							label="Username/Email"
							placeholder="john-doe123/john@oi.com"
							type="text"
							errors={errors}
							touched={touched}
						/>
						<Input
							id="password"
							name="password"
							label="Senha"
							placeholder="Senha..."
							type="password"
							errors={errors}
							touched={touched}
						/>
						<Button type="submit">Entrar</Button>
					</StyledForm>
				)}
			</Formik>
		</Container>
	)
}

export default Login
