import axios from 'axios';
import config from './config';

class ecrewsAPI {
  static get(route, params) {
    return this.api({
      method: 'get', route, params,
    });
  }

  static post(route, params, data, timeout) {
    return this.api({
      method: 'post', route, data, timeout,
    });
  }

  static put(route, params, data, timeout) {
    return this.api({
      method: 'put', route, data, timeout,
    });
  }

  static patch(route, params, data, timeout) {
    return this.api({
      method: 'patch', route, data, timeout,
    });
  }

  static delete(route, params) {
    return this.api({
      method: 'delete', route, params,
    });
  }

  static api({
    method, route, data, params, timeout,
  }) {
    const url = `${config.baseURL}${route}`;
    const requestConfig = {
      method,
      url,
      headers: { 'Content-Type': 'application/json' },
    };

    if (params) {
      requestConfig.params = params;
    }

    if (data) {
      requestConfig.data = data;
    }

    if (timeout) {
      requestConfig.timeout = timeout;
    }

    return axios(requestConfig)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`Error during request: ${error}`);
      });
  }
}

export default ecrewsAPI;
