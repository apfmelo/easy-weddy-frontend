import React, { useEffect, useState } from 'react'
import { StyledAlert } from './styles'

import SuccessIcon from '@mui/icons-material/LibraryAddCheckOutlined'
import ErrorIcon from '@mui/icons-material/Error'
import WarningIcon from '@mui/icons-material/Warning'
import CloseIcon from '@mui/icons-material/HighlightOff'

type alertStatusType = 'success' | 'warning' | 'error' | 'genericError'

type Props = {
	type: alertStatusType
	message: string
	handleCloseAlert: () => void
	expireTime?: number
}

export const Alert = ({
	type,
	message,
	handleCloseAlert,
	expireTime,
}: Props) => {
	const [alert, setAlert] = useState(true)

	const handleIcon = () => {
		const typeStyles = {
			success: <SuccessIcon />,
			warning: <WarningIcon />,
			error: <ErrorIcon />,
			genericError: <ErrorIcon />,
		}

		return typeStyles[type]
	}

	useEffect(() => {
		if (alert && expireTime) {
			const timer = setTimeout(() => {
				setAlert(false)
			}, expireTime)
			return () => clearTimeout(timer)
		}
	}, [expireTime, alert])

	return (
		<>
			{alert && (
				<StyledAlert type={type}>
					{handleIcon()}
					<span>{message}</span>
					<CloseIcon onClick={handleCloseAlert} className="close-button" />
				</StyledAlert>
			)}
		</>
	)
}
