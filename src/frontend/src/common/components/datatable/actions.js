/* actions */
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

/* action creators */
export const createActionFetchData = () => {
  return {'type': FETCH_DATA}
}
export const createActionFetchDataSuccess = (response) => {
  return {'type': FETCH_DATA_SUCCESS, response}
}
export const createActionFetchDataFail = (response) => {
  return {'type': FETCH_DATA_FAIL, response}
}
