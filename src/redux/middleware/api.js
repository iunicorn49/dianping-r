import { get } from "../../utils/request";

// 有这个属性的都需要经过中间件处理
export const FETCH_DATA = "FETCH DATA";

export default store => next => action => {
  const callAPI = action[FETCH_DATA];
  if (typeof callAPI === "undefined") {
    // 说明这个action不是一个请求action, 直接交由后面的中间件处理
    return next(action);
  }
  /** 逐步校验我们自己定义的数据 */
  const { endpoint, schema, types } = callAPI;
  if (typeof endpoint !== "string") {
    throw new Error("endpoint必须是字符串类型的URL!");
  }
  if (!schema) {
    throw new Error("必须指定schema!");
  }
  if (!Array.isArray(types) && types.length !== 3) {
    throw new Error("必须有一个包含三个actionType的数组");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("type必须都是string类型");
  }

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[FETCH_DATA];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));
  return fetchData(endpoint, schema).then(
    response =>
      next({
        type: successType,
        response
      }),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || "获取数据失败"
        })
      )
  );
};

// 执行网络请求
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return normalizeData(data, schema);
  });
};

// 根据schema, 讲数据扁平化
const normalizeData = (data, schema) => {
  const { id, name } = schema;
  let kvObj = {};
  let ids = []; // 通过id排序
  if (Array.isArray(data)) {
    // data是数组的情况, 例如列表数据
    data.forEach(item => {
      kvObj[item[id]] = item;
      ids.push(item[id]);
    });
  } else {
    // 如果data是对象的话, 例如详情数据
    kvObj[data[id]] = data;
    ids.push(data[id]);
  }
  return {
    [name]: kvObj,
    ids
  };
};
