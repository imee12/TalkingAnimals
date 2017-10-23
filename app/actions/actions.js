  // import { createAction } from 'redux-actions';
//
// export const animals = createAction('ANIMALS');
//
// export const getAnimals =




import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../reducers/constants'
import getPeople from '../store/api'

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}
