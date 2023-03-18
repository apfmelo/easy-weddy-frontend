import axios from 'axios'

const params = {
	baseURL: 'http://localhost:8000',
}

const heraApi = axios.create(params)

export const login = async (data: any) => heraApi.post('/', data)
