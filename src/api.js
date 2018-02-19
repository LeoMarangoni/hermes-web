import axios from "axios"

class Api {
  constructor() {
    this.config = {
      host: 'http://localhost',
      port: '5500',
    }
    this.url = this.config.host+':'+this.config.port

  }
  get(that, path) {
    axios.get(this.url+path)
      .then(function (response) {
        console.log(response);
        that.setState(Object.assign(response.data, {loader: false}))
      })
      .catch(function (error) {
        console.log(error);
        return error
      });
  }

  post(path, data) {
    axios.post(this.url+path, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  put(path, data) {
    axios.put(this.url+path, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}
export let api = new Api();
