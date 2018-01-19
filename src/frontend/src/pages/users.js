/* react lib */
import React from 'react';
import {render} from 'react-dom';

/* redux lib */
import {Provider} from 'react-redux';
import {createStore} from 'redux';

/* material-ui lib */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* custom */
import {reducers} from '../common/components/datatable/reducers';
import {DataTable} from '../common/components/datatable/components';
import {endpoints} from '../common/utils/endpoints';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <DataTable
       url={endpoints.users.list}
       title='Users'
       description='The list of users available in the system'
       cols='["full_name", "username", "email"]'
       labels='{"full_name": "Full Name", "username": "Username", "email": "Email ID"}'
       disableActions='false'
      />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
