const getData = (onSuccess, onFail) => {
  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(API);
    }, 5000);
  });

  fetchData.then((value) => {
    const dataAPI = value.products;
    onSuccess(dataAPI);
  });
}

