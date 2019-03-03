export default {
  getProductList: (path, rowIndex, pageSize) => {
    return `/mock/products/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`;
  },
  getProductDetail: id => {
    return `/mock/product_detail/${id}.json`;
  },
  getShopById: id => {
    return `/mock/shops/${id}.json`;
  },
  getPopularKeywords: () => {
    return `/mock/keywords/popular.json`;
  },
  getRelatedKeywords: (text) => { // mock数据下, 查出来的东西都是一样的
    // return `/mock/keywords/related.json?keyword=${text}`;
    return `/mock/keywords/related.json`;
  },
};
