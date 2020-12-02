import DataRequest from '../utils/DataRequest';
const request = new DataRequest();

export function getProductDetail(params) {
  return request.fetchPostData('/admin/getProductDetail', params);
}
export function getProductListById(params) {
  return request.fetchPostData('/admin/getProductListById', params);
}
