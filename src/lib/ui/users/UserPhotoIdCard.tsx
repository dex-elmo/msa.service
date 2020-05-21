import React from 'react';
import {
  Button, Input, Select, Table,
} from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
}

interface State {
  type:string;
}

@autobind
class UserPhotoIdCard extends React.Component<Props, State> {
  idCard = [
    { key: '1', value: 'Voter ID Card', text: 'Voter ID Card' },
    { key: '2', value: 'National ID Card', text: 'National ID Card' },
    { key: '3', value: 'Driver\' License', text: 'Driver\' License' },
    { key: '4', value: 'NHIS ID', text: 'NHIS ID' },
    { key: '5', value: 'SSNIT ID', text: 'SSNIT ID' },
    { key: '6', value: 'Passport', text: 'Passport' },
  ];

  constructor(props:Props) {
    super(props);
    this.state = {
      type: 'Id Card type',
    };
  }

  changeType = (e:any, data:any) => { /* 이런 파마미터 타입 지정 어떻게 아는지 */
    this.setState({
      type: data.value,
    });
  }

  uploadIdCard = async () => {
    await UserApi.uploadFile();
  }

  render() {
    return (
      <>
        <Select placeholder="Select Id Card Type" options={this.idCard} onChange={this.changeType} />
        <Button content="Upload" onClick={this.uploadIdCard} />
        <div>
          {this.state.type} : <Input /> Please enter a number that identifies the ID card.
        </div>
      </>
    );
  }
}

export default UserPhotoIdCard;
