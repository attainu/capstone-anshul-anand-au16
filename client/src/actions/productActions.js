import axios from 'axios';

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: 'GET_PRODUCTS_REQUEST' });
  axios
    .get('/api/products/getallproducts')
    .then((res) => {
      console.log(res);

      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_PRODUCTS_FAILED', payload: err });
      console.log(err);
    });
};

export const getProductById = (productid) => (dispatch) => {
  dispatch({ type: 'GET_PRODUCTBYID_REQUEST' });
  axios
    .get('/api/products/getproductbyid', { productid })
    .then((res) => {
      console.log(res);

      dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_PRODUCTBYID_FAILED', payload: err });
      console.log(err);
    });
};
