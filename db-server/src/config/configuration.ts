import process from 'process';

export default () => ({
  products: {
    baseUrl: process.env.PRODUCTS_API_BASE_URL || 'https://fakestoreapi.com',
    version: process.env.PRODUCTS_API_VERSION || 'v1',
  },
});
