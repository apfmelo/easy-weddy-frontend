import Link from 'next/link'
import { StyledA, FlexContainer, Card } from './styles'

const StyledLink = ({ href, name }: any) => (
	<Link href={href} passHref legacyBehavior>
		<StyledA>{name}</StyledA>
	</Link>
)

export const Cards = () => {
	return (
		<FlexContainer>
			<Card>
				<StyledLink href="/login" name="Login &rarr;" />
			</Card>
		</FlexContainer>
	)
}
