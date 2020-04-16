export class _Storage {
	save (key) {
		if (!key) {
			uni.setStorage({ 
				key: []
			})
		} else {
			uni.setStorage({ key })
		}
	}
	get (key) {
		const data = uni.getStorage(key)
		
		if (!data) {
			return []
		} else {
			return data
		}
	}
	del (key) {
		uni.removeStorage({ key })
	}
	clear () {
		uni.clearStorage()
	}
}