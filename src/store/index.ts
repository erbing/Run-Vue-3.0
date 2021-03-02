import { createStore } from 'vuex'

export default createStore({
	state: {
		testA: 123
	},
  mutations: {
		SET_STATE_TEST(stata, value) {
			stata.testA = value
		} 
	},
  actions: {},
  getters: {},
  modules: {}
})