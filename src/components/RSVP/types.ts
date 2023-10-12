export type Props = {
	fianceId: string
	title: string
	button: string
	alert: Record<string, string>
	name: FieldProps
	isConfirmed: FieldProps
	email: FieldProps
	qtyCompanions: FieldProps
}

type FieldProps = {
	type: string
	label: string
	placeholder?: string
	options?: { label: string; value: string }[]
}
