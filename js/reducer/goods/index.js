import Types from '../../actions/Types'

const defaultState = {}
export default function onAction(state = defaultState, action) {
  switch(action.type) {
    case Types.LOAD_GOODS:
      return [
        ...state,
       {
         loading: true,
         hideMoreLoading: true,
       } 
      ]
    case Types.LOAD_GOODS_SUCCESS:
      return [
        ...state,
       {
         data: action.data,
         loading: false,
         hideMoreLoading: false,
         pageIndex: action.pageIndex
       } 
      ]
    case Types.LOAD_GOODS_FAILED:
      return [
        ...state,
       {
         loading: false,
       } 
      ]
    case Types.REFRESH_GOODS_SUCCESS:
      return [
        ...state,
       {
         data: action.data,
         hideMoreLoading: false,
         pageIndex: action.pageIndex
       } 
      ]
    case Types.REFRESH_GOODS_FAILED:
      return [
        ...state,
       {
         hideMoreLoading: true,
         pageIndex: action.pageIndex
       } 
      ]
    default:
        return state
  }
}