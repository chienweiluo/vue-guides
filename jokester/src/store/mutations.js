import * as types from './mutations_type.js'

export const mutations = {
	[types.INIT_JOKES](state,payload){
		state.jokes.push(...payload)
	}
}