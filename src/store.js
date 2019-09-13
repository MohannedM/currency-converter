import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies:[
      '$',
      '£',
      'EUR',
      'EGP'
    ],
    items: ''
  },
  mutations: {
    set_items(state, items){
      state.items = items;
    }
  },
  actions: {
    import_items({commit}){
      return axios.get('https://server.offmade.io/code-challenge')
      .then(res=>{
        commit('set_items', res.data);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  getters:{
    get_currencies(state){
      return state.currencies;
    },
    get_items(state){
      return state.items;
    }
  }
})
