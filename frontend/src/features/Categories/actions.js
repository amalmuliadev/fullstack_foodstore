import debounce from 'debounce-promise';

import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  SET_PAGE,
  SET_KEYWORD,
} from './constants';

import { getCategories } from '../../api/category';
let debouncedFetchCategories = debounce(getCategories, 1000);

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCategories());

    let perPage = getState().categories.perPage || 9;
    let currentPage = getState().categories.currentPage || 1;
    let keyword = getState().categories.keyword || '';

    const params = {
      limit: perPage, 
      skip: (currentPage * perPage) - perPage,
      q: keyword,
    }
    
    try {
      let { data: {data, count} } = await debouncedFetchCategories(params);
      dispatch(successFetchingCategories({data, count}));
    } catch (err) {
      dispatch(errorFetchingCategories());
    }

  }
}

export const startFetchingCategories = () => {
  return {
      type: START_FETCHING_CATEGORY
  }
}
export const errorFetchingCategories = () => {
  return {
      type: ERROR_FETCHING_CATEGORY
  }
}

export const successFetchingCategories = ({data, count}) => {
  return {
      type: SUCCESS_FETCHING_CATEGORY,
      data,
      count
  }
}

export const setPage = (number = 1) => {
return {
  type: SET_PAGE,
  currentPage: number
}
}

export const setKeyword = keyword => {
return {
  type: SET_KEYWORD,
  keyword
}
}