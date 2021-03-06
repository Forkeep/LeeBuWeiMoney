const localStorageKeyName = 'recordList';

const recordModel = {
  deepClone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data)) as RecordItem;
  },

  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },

  saveRecord(recordList: RecordItem[]){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(recordList));
  }
};

export {recordModel};