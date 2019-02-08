const headers = new Headers({
  "Accept": "application/json",
  "Content-type": "application/json"
})

function get(url) {
  return fetch(url, {
    method: "GET",
    headers,
  }).then(response => {
    return handleResponse(url, response)
  }).catch(err => {
    return Promise.reject({error: {message: '请求失败'}})
  })
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers,
    body: data,
  }).then(response => {
    return handleResponse(url, response)
  }).catch(err => {
    return Promise.reject({error: {message: '请求失败'}})
  })
}

function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json()
  } else {
    console.error('请求错误:', url)
    return Promise.reject({error: {message: '请求错误'}})
  }
}

export { get, post }