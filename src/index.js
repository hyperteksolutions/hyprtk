const axios = require("axios");

class HyprTK {
  constructor(key) {
    this.key = key;
    this.instance = axios.create({
      baseURL: "https://api.hyprtk.co/v1/api",
      timeout: 15000,
      headers: { authorization: "Bearer " + this.key },
    });
  }
  checkSlug = async (slug) => {
    let x = await this.instance.get(`/checkSlug/${slug}`);
    return Promise.resolve(x.data);
  };

  createLink = async (data) => {
    let x = await this.instance.post("/slug", data);
    return Promise.resolve(x.data);
  };

  updateLink = async (data) => {
    let x = await this.instance.put(`/slug/${data.slug}`, data);
    return Promise.resolve(x.data);
  };
}

var _old = HyprTK;
HyprTK = function (...args) {
  return new _old(...args);
};

module.exports = HyprTK;
module.exports.default = HyprTK;
