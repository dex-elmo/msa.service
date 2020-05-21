import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
  handleEmail:any;
}

@autobind
class UserEmailCheck extends React.Component<Props> {
  checkEmail = async () => {
    await UserApi.checkEmail();
  }

  render() {
    return (
      <>
        <Input onChange={ (e) => { this.props.handleEmail(e.currentTarget.value); } } />
        <Button content="Check" onClick={ this.checkEmail } />
      </>
    );
  }
}

export default UserEmailCheck;
