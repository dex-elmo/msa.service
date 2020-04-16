import configurePreview from '../config/configurePreview'
import { addDecorator } from '@storybook/react'

import React from 'react'
import { Provider } from 'mobx-react'
// import { store } from '@nara.drama/echo';

// import { PatronModel, WorkspacesModel, patronInfo } from '@nara.platform/dock';
// import { patronInfo } from '@nara.platform/dock';

if (process.env.NODE_ENV === 'development') {
  // 로컬 서버
  // const patron = PatronModel.newDevPatron('test**', 'test@test.com');
  // const workspaces = WorkspacesModel.newDevCineroom('ne1-m2-c2', 'TestCineroomName', 'r3@ne1-m2-c2', ['admin', 'user']);
  //
  // patronInfo.setDevPatronInfo(patron, workspaces);

  // 개발 서버
  // patronInfo.login('jmpark@nextree.io', '1')
  // // patronInfo.login('kspark@nextree.io', '1')
  //   .then(response =>
  //     response.success && patronInfo.setDevByLogin(response.data)
  //   );
}

configurePreview(() => {
  addDecorator(storyFn => (
    <Provider>
      {storyFn()}
    </Provider>
  ))
})
