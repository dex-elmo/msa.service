import React from 'react';
import { Button, Input, Table } from 'semantic-ui-react';
import UserApi from '~/lib/service/users/api/UserApi';
import autobind from '~/lib/ui/module/autobindDecorator';

interface Props {
  handleMeter:any;
}

@autobind
class UserMeterCheck extends React.Component<Props, any> {
  checkMeter = async () => {
    await UserApi.checkMeter();
  }

  render() {
    return (
      <>
        <Input onChange={ (e) => { this.props.handleMeter(e.currentTarget.value); } } />
        <Button content="Check" onClick={ this.checkMeter } />
      </>
    );
  }
}

export default UserMeterCheck;
