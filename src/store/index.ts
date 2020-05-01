import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    recordList: [],
    currentList: [],

  },
  mutations: {
    deepCloneRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    getCurrentList(state, payload) {
      state.currentList = [];
      state.recordList.forEach((item, index, array) => {
        if ((item as RecordItem).type === payload) {
          state.currentList.push(item);
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
