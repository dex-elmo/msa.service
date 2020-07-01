
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import docs from './docs';
import { UserInfo } from '~/lib';

export const Basic = (props: any) => {
  const handleModifyUser = (bool:boolean) => {
    console.log(bool);
    if (bool) {
      window.alert('회원가입 성공');
    } else {
      window.alert('회원가입 실패');
    }
  };

  const closeWindow = () => {
    window.close();
  };

  class Story extends Component {
    render() {
      return (
        <div>
          <UserInfo
            handleModifyUser={ handleModifyUser }
            closeWindow={ closeWindow }
          />
        </div>
      );
    }
  }

  return (
    <div>
      <Story { ...props } />
    </div>
  );
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|UserInfo',
  component: docs.component,
  parameters: { ...docs.parameters },
};
