import axios from 'axios';

let clientId = 'U5eDuoT54IEHxt1apglCQsKtQgFQFWk0mxPtpKwWckY'
let baseUrl = 'https://api.unsplash.com'

const fetchAlbum = async (s) => {
	let album = {}
	try {
		album = await axios.get(`${baseUrl}/search/collections`, {
			params: {
				client_id: clientId,
				query: 'african'
			}
		});
		console.log('fetching album complete from outside')
		return album.data
	} catch (error) {
		console.error(error)
	}
}
export {
	fetchAlbum
};