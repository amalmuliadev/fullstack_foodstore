import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  SET_PAGE,
  SET_KEYWORD,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 6,
  keyword: '',
  status: statuslist.idle
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case START_FETCHING_CATEGORY:
      return {...state, status: statuslist.process}

    case ERROR_FETCHING_CATEGORY:
      return {...state, status: statuslist.error}
    
    case SUCCESS_FETCHING_CATEGORY:
        return {...state, status: statuslist.success, data: action.data,
        totalItems: action.count}
    
    case SET_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_KEYWORD:
        return {...state, keyword: action.keyword}

    default:
      return state
  }
}