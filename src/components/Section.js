export default class Section {
  constructor({ renderer }, baskerArr) {
    this._renderer = renderer;
    this._baskerArr = baskerArr;
  }

  rendererItems(items) {
    items.forEach(item => {
      this._renderer(item, this._baskerArr);
    });
  }

  rendererItemsAndNum(items) {
    const num = items.reduce((total, item) => {
      total[item.id] = (total[item.id] || 0) + 1;
      return total;
    }, {});
    items = items.filter((item, index, arr) => {
      if (
        index ===
        arr.findIndex(testItem => {
          return testItem.id === item.id;
        })
      ) {
        return true;
      }
    });
    items.forEach(item => {
      this._renderer(item, num, items);
    });
  }
}
