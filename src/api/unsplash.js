import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 94Lwjlj6qjaknSdhI_fYQ44WuMaUua7FV0-XSORDxcU',
  },
});