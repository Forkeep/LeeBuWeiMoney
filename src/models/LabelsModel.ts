const localStorageKeyNameLabels = 'labelList';

const labelModel = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyNameLabels) || '["衣","食","住","行"]') as string[];
  },
  saveLabel(labelList: string[], newLabel: string) {
    if (newLabel) {
      newLabel = newLabel.trim();
      if(newLabel){
        if (labelList.indexOf(newLabel) >= 0) {
          alert('标签已存在');
          return;
        } else {
          labelList.push(newLabel);
          console.log(labelList);
          window.localStorage.setItem(localStorageKeyNameLabels, JSON.stringify(labelList));
        }
      }


    }
  },
};

export {labelModel}