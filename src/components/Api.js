import { API } from "../../api/products.js";

export default class Api {
  getFakeData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(API);
      }, 1000);
    });
  }
}
