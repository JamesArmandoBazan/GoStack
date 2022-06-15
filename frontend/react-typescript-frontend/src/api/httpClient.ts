export const httpClient = {
  get: (url: string, options?: any) => {
    return fetch(url, {
      method: "GET",
    })
      .then(async (res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  post: (url: string, body: any, options?: any) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw err;
      });
  },
};
