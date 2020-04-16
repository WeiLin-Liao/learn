import HTTP from '../utils/http'

const $ = new HTTP()

function getApi () {
	return $._request({
		url: '/api/json.php',
		methods: 'GET'
	})
}

export {
	getApi
}