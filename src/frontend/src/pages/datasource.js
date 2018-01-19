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

let store = createStore(reducers);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <DataTable url="http://localhost:8080/sample/data.json" title="Title" description="Sample description" />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
