import React from 'react';
import { Button, Select, Table } from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
}

interface State {
  type:string;
}

@autobind
class UserAdditionalCertificate extends React.Component<Props, State> {
  addCert = [
    { key: '1', value: '1', text: 'Registered Tenancy Agreement' },
    { key: '2', value: '2', text: 'Utility Bill' },
    { key: '3', value: '3', text: 'Income Tax Certificate' },
    { key: '4', value: '4', text: 'Bank Statements' },
    { key: '5', value: '5', text: 'Reference Letter' },
  ]

  uploadCertificate = async () => {
    await UserApi.uploadFile();
  }

  render() {
    return (
      <>
        <Select placeholder="Select Certificate" options={ this.addCert } />
        <Button content="Upload" onClick={this.uploadCertificate} />
      </>
    );
  }
}

export default UserAdditionalCertificate;
