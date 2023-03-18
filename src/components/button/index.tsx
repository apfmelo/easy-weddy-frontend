interface Props {
	type?: 'button' | 'submit' | 'reset'
	children: React.ReactNode
}

export const Button = ({ type, children }: Props) => {
	return <button type={type}>{children}</button>
}
