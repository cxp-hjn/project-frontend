import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
      /*
	  login(state, data){
      sessionStorage.setItem('userId', data.userId);
		  sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('token', data.token);
      state.userId = data.userId;
		  state.username = data.username;
      state.token = data.token;
	  },
	  logout(state){
      sessionStorage.removeItem('userId');
		  sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      state.userId = null;
		  state.username = null;
      state.token = null;
	  }
      */
  },
  getters: {},
  actions: {}
})
