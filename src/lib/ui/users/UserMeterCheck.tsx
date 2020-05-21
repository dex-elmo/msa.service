import React from 'react';
import { Button, Input, Table } from 'semantic-ui-react';
import UserApi from '~/lib/service/users/api/UserApi';
import autobind from '~/lib/ui/module/autobindDecorator';

@autobind
class UserMeterCheck extends React.Component<any, any> {
  checkMeter = async () => {
    await UserApi.checkMeter();
  }

  render() {
    return (
      <>
        <Input />
        <Button content="Check" onClick={ this.checkMeter } />
      </>
    );
  }
}

export default UserMeterCheck;
