import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';


interface Props {
  handleEmail:any;
  handleEmailCheck:any;
}

interface State {
  email:string;
}

@autobind
class UserEmailCheck extends React.Component<Props, State> {
  checkEmail = async () => {
    const returnData = await UserApi.checkEmail(this.state.email);
    console.log(returnData.data);
    if (returnData.data.status === true) {
      this.props.handleEmailCheck(returnData.data.status);
      window.alert('You can use ID');
    } else {
      window.alert(returnData.data.message);
    }
  }

  handleEmail = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: e.currentTarget.value });
    this.props.handleEmail(e.currentTarget.value);
  }

  render() {
    return (
      <>
        <Input onChange={this.handleEmail} />
        <Button content="Check" onClick={ this.checkEmail } />
      </>
    );
  }
}

export default UserEmailCheck;
