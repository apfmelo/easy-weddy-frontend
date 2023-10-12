import RSVP from '@/components/RSVP'

interface Props {
	type: string
	fianceId: string
}

const ComponentLoader = (content: Props) => {
	const LoadComponent = {
		RSVPForm: RSVP,
	}
	const { type } = content

	const Component: (props?: any) => JSX.Element =
		LoadComponent[type as keyof typeof LoadComponent]

	return <Component {...content} />
}

export default ComponentLoader
