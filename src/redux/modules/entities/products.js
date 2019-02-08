export const schema = {
  name: "products",
  id: "id"
};

const reducer = (state = {}, action) => {
  // 如果是调用api获取数据成功的action
  if (action.response && action.response.products) {
    return { ...state, ...action.response.products };
  }
  return state;
};

export default reducer;
