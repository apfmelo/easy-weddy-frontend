import { StyledButton } from './styles'
interface Props {
	type?: 'button' | 'submit' | 'reset'
	children: React.ReactNode
	styleType?: 'outlined' | 'login'
	size?: 'big'
	onClick?: () => void
	disabled?: boolean
	color?: 'warning'
}

export const Button = ({ type, children, onClick, disabled }: Props) => {
	return (
		<StyledButton onClick={onClick} disabled={disabled} type={type}>
			<span>{children}</span>
		</StyledButton>
	)
}
