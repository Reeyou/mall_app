import Types from '../Types'
import DataRequest from '../../utils/DataRequest'

/**
 * 请求商品列表数据
 * @param {*} storeName 
 * @param {*} url 
 * @param {*} pageSize 
 */
export function loadGoodsList(storeName, url, pageSize) {
  return dispatch => {
    dispatch({
      type: Types.LOAD_GOODS,
      storeName
    })
    let dataRequest = new DataRequest()
    dataRequest.fetchData(url)
    .then(res => {
      dispatch({
        type: Types.LOAD_GOODS_SUCCESS,
        data: res.data,
        storeName
      })
    })
    .catch(e => {
      console.log(e)
      dispatch({
        type: Types.LOAD_GOODS_FAILED,
        err,
        storeName
      })
    })
  }
}

/**
 * 商品列表刷新
 * @param {*} storeName 
 * @param {*} pageIndex 
 * @param {*} pageSize 
 * @param {*} dataArray 
 * @param {*} callBack 
 */
export function refreshGoodsList(storeName, pageIndex, pageSize, dataArray = [], callBack) {
  return dispatch => {
    setTimeout(() => {
      if((pageIndex - 1) * pageSize >= dataArray.length) {
        if(typeof callBack == 'function') {
          callBack('no more data')
        }
        dispatch({
          type: Types.REFRESH_GOODS_FAILED,
          err: 'no more',
          storeName,
          pageIndex: --pageIndex
        })
      } else {
        let currentLength = pageSize * pageIndex
        let max = currentLength > dataArray.length ? dataArray.length : currentLength
        dispatch({
          type: Types.REFRESH_GOODS_SUCCESS,
          storeName,
          pageIndex,
          data: dataArray.slice(0, max)
        })
      }
    },1000)
  }
}