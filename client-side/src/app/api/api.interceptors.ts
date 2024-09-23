import axios, { CreateAxiosDefaults } from 'axios'



// import {
// 	getAccessToken,
// 	removeFromStorage
// } from '@/services/auth/auth-token.serice'
// import { authService } from '@/services/auth/auth.service'

import { errorCatch, getContentType } from './api.hepler'
import { SERVER_URL } from '@//shared/config/api.config'
import { authService } from '@//features/auth/auth.service'
import { getAccessToken, removeFromStorage } from '@//features/auth/auth-token.service'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expried' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
