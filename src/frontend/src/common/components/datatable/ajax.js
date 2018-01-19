/* custom */
import * as actions from './actions';
import {storage} from '../../utils/index'

let getHeaders = () => {
  return {
    'Authorization': 'Token'.concat(' ', storage.read('token'))
  }
}

export const fetchData = (url, dispatch) => {
  dispatch(actions.createActionFetchData());
  return $.ajax({
    url: url,
    headers: getHeaders()
  })
  .done(function(data, status, xhr) {
    dispatch(actions.createActionFetchDataSuccess(data));
  })
  .fail(function(xhr, status, error) {
    dispatch(actions.createActionFetchDataFail(error));
  });
}
