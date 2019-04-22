import axios from 'axios';

export default axios.create({
  baseURL: `/image`,
  withCredentials: true,

});

// credentials: 'include'