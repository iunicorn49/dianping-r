import { combineReducers } from "redux";
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema as shopSchema, getShopById } from "./entities/shops";
import { schema as productSchema, getProductDetail, getProductById } from "./entities/products";

export const types = {
  // 获取产品详情
  FETCH_PRODUCT_DETAIL_REQUEST: "FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAILURE: "FETCH_PRODUCT_DETAIL_FAILURE",
  // 获取店铺
  FETCH_SHOP_REQUEST: "FETCH_SHOP_REQUEST",
  FETCH_SHOP_SUCCESS: "FETCH_SHOP_SUCCESS",
  FETCH_SHOP_FAILURE: "FETCH_SHOP_FAILURE"
};

const initialState = {
  product: {
    ifFetching: false,
    id: null
  },
  relatedShop: {
    isFetching: false,
    id: null
  }
};

export const actions = {
  loadProductDetail: id => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(), id);
      if (product) {
        return dispatch(fetchProductDetailSuccess(id));
      }
      const endpoint = url.getProductDetail(id);
      return dispatch(fetchProductDetail(endpoint, id));
    };
  },
  loadShopById: id => {
    return (dispatch, getState) => {
      const shop = getShopById(getState(), id);
      if (shop) {
        return dispatch(fetchShopSuccess(id));
      }
      const endpoint = url.getShopById(id);
      return dispatch(fetchShopByID(endpoint, id));
    };
  }
};

const fetchProductDetail = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE
    ],
    endpoint,
    schema: productSchema
  }
});

const fetchProductDetailSuccess = id => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  id
});

const fetchShopByID = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE
    ],
    endpoint,
    schema: shopSchema
  },
  id
});

const fetchShopSuccess = id => ({
  type: types.FETCH_SHOP_SUCCESS,
  id
});

const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, id: null, isFetching: false };
    default:
      return state;
  }
};

const relatedShop = (state = initialState.relatedShop, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_SHOP_FAILURE:
      return { ...state, id: null, isFetching: false };
    default:
      return state;
  }
};

const reducer = combineReducers({
  product,
  relatedShop
});

export default reducer;

// selectors
export const getProduct = (state, id) => {
  return getProductDetail(state, id)
}

export const getRelatedShop = (state, productId) => {
  const product = getProductById(state, productId)
  let shopId = product ? product.nearestShop : null
  if (shopId) {
    return getShopById(state, shopId)
  }
  return null
}