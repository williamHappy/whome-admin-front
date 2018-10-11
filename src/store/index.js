import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
import search from './modules/search'
import user from './modules/user'
import router from './modules/router'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    tagsView,
    router,
    search,
    user
  },
  getters
})

export default store
