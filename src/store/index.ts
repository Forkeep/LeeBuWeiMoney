import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type rootState = {
  recordList: RecordItem[],
  currentList: RecordItem[],
  groupRecord: { [key: string]: RecordItem[] }
}

export default new Vuex.Store({
  state: {
    recordList: [],
    currentList: [],
    groupRecord: {},
  },
  mutations: {
    deepCloneRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    getCurrentList(state, payload) {
      state.currentList = [];
      state.groupRecord = {};
      state.recordList.forEach((item, index, array) => {
        if ((item as RecordItem).type === payload) {
          state.currentList.push(item);
        }
      });
      state.currentList.forEach((item, index, array) => {
        const [date,second] = (item as RecordItem).createDate!.split('T');
        // @ts-ignore
        state.groupRecord[date] = state.groupRecord[date] || [];
        // @ts-ignore
        state.groupRecord[date].push(item);
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
