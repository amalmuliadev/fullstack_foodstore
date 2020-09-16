import debounce from 'debounce-promise';

import {
  START_FETCHING_TAG,
  ERROR_FETCHING_TAG,
  SUCCESS_FETCHING_TAG,
  SET_PAGE,
  SET_KEYWORD,
} from './constants';

import { getTags } from '../../api/tag';
let debouncedFetchTags = debounce(getTags, 1000);

export const fetchTags = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingTags());

    let perPage = getState().Tags.perPage || 9;
    let currentPage = getState().Tags.currentPage || 1;
    let keyword = getState().Tags.keyword || '';

    const params = {
      limit: perPage, 
      skip: (currentPage * perPage) - perPage,
      q: keyword,
    }
    
    try {
      let { data: {data, count} } = await debouncedFetchTags(params);
      dispatch(successFetchingTags({data, count}));
    } catch (err) {
      dispatch(errorFetchingTags());
    }

  }
}

export const startFetchingTags = () => {
  return {
      type: START_FETCHING_TAG
  }
}
export const errorFetchingTags = () => {
  return {
      type: ERROR_FETCHING_TAG
  }
}

export const successFetchingTags = ({data, count}) => {
  return {
      type: SUCCESS_FETCHING_TAG,
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