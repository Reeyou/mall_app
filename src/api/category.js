import DataRequest from '../utils/DataRequest';
const request = new DataRequest();

export function getCategoryList() {
  return request.fetchNetData('/admin/getCategoryList');
}
