import * as types from './mutations_type.js'

export const initJokes = ({commit}) => {
	fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten',{
		method: 'GET'
	})
	.then((response) => response.json())
	.then(json => commit(types.INIT_JOKES,json))
}