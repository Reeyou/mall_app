import Request from '../utils/request';
const request = new Request();

export function getCategoryList() {
  return request.fetchNetData('/admin/getCategoryList');
}
