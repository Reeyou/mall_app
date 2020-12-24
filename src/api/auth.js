import Request from '../utils/request';
const request = new Request();

export function getCode(params) {
  return request.fetchPostData('/admin/sendCode', params);
}

export function login(params) {
  return request.fetchPostData('/admin/login', params);
}