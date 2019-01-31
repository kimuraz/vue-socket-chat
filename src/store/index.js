import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: '',
    avatar: ''
  },
  getters: {
    getUser: state => state.user,
    getAvatar: state => state.avatar
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAvatar(state, avatar) {
      state.avatar = avatar;
    }
  }
});

export default store;
