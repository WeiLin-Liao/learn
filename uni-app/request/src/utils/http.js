import config from '../config.js'

/**
 * 请求封装
 */
export default class HTTP {
	_request ({url, methods = 'POST', data = {}}) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: HTTP._url() + url,
				data,
				methods,
				dataType: 'json',
				header: {
					'content-type': methods == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
				},
				success: res => {
					resolve(res)
				},
				fail: err => {
					uni.showToast({
						title: '网络错误',
						icon: none
					})
					reject()
				}
			})
		}).catch(e => {
			console.log(e)
			
		})
	}
	
	static _url () {
		if (process.env.NODE_ENV === 'development') {
			return config.API_DEV_URL
		}
		return config.API_PORD_URL
	}
}

