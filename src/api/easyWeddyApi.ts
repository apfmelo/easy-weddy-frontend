import axios from 'axios'

export interface IGuest {
	email: string
	name: string
	qtyPlusGuests?: number
	isConfirmed: string
	fianceId: string
}

const params = {
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	headers: {
		authorization: process.env.NEXT_PUBLIC_API_KEY,
	},
}

const easyWeddyApi = axios.create(params)

export const login = async (data: any) => easyWeddyApi.post('/', data)

export const updateGuest = async (guestId: string, data: IGuest) =>
	easyWeddyApi.put(`/guests/${guestId}`, { data })
