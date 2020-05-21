import React from 'react';
import {
  Button, Grid, Input, Radio, Select, Table,
} from 'semantic-ui-react';
import UserAdditionalCertificate from '~/lib/ui/users/UserAdditionalCertificate';
import UserEmailCheck from '~/lib/ui/users/UserEmailCheck';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserPhotoIdCard from '~/lib/ui/users/UserPhotoIdCard';
import UserMeterCheck from '~/lib/ui/users/UserMeterCheck';
import SharedBirthOfDate from '~/lib/ui/shared/SharedBirthOfDate';

interface Props {
}

interface State {
  branch:string;
  sex:string;
}

@autobind
class UserRegisterForm extends React.Component<Props, State> {
  eStation = [
    { key: '1', value: '1', text: 'ES1' },
    { key: '2', value: '2', text: 'ES2' },
  ];

  vStation = [
    { key: '1', value: '1', text: 'VS1' },
    { key: '2', value: '2', text: 'VS2' },
  ];

  constructor(props:any) {
    super(props);
    this.state = {
      branch: '',
      sex: 'M',
    };
  }

  handleBranch = (e:any, value:any) => {
    this.setState({
      branch: value.value,
    });
  }

  handleSex = (e:any, value:any) => {
    this.setState({
      sex: value.sex,
    });
  }

  handleEmail = (input:string) => {
    // console.log(input);
  }

  render() {
    return (
      <div>
        <h3>Register Member</h3>

        <h4>Member Info</h4>

        <Grid>
          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={ 2 }>Registered Branch</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <Radio
                    label="E/S"
                    name="stationGroup"
                    value="CES"
                    checked={ this.state.branch === 'CES' }
                    onChange={ this.handleBranch }
                  />
                  <Radio
                    label="V/S"
                    name="stationGroup"
                    value="CVS"
                    checked={ this.state.branch === 'CVS' }
                    onChange={ this.handleBranch }
                  />
                  <Select placeholder="-------- E-Station --------" options={ this.eStation } />
                  <Select placeholder="-------- V-Station --------" options={ this.vStation } disabled={ this.state.branch !== 'CVS' } />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>E-Mail ID</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <UserEmailCheck handleEmail={ this.handleEmail } />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Photo ID card</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <UserPhotoIdCard />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Additional Certificate</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <UserAdditionalCertificate />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Password</Table.Cell>
                <Table.Cell width={ 3 }><Input type="password" /></Table.Cell>
                <Table.Cell width={ 2 }>Confirm Password</Table.Cell>
                <Table.Cell width={ 3 }><Input type="password" /></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Name</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  First Name <Input /> Last Name <Input />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={ 2 }>Date of Birth</Table.Cell>
                <Table.Cell width={ 3 }>
                  <SharedBirthOfDate />
                </Table.Cell>
                <Table.Cell width={ 2 }>Gender</Table.Cell>
                <Table.Cell width={ 3 }>
                  <Radio
                    label="Male"
                    name="sexGroup"
                    sex="M"
                    checked={ this.state.sex === 'M' }
                    onChange={ this.handleSex }
                  />
                  <Radio
                    label="Female"
                    name="sexGroup"
                    sex="F"
                    checked={ this.state.sex === 'F' }
                    onChange={ this.handleSex }
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Birthplace</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <Input />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Address</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <Input placeholder="Details" />
                  <Input placeholder="Street" />
                  <Input placeholder="City" />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Mobile Number</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <Input />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell width={ 2 }>Meter ID</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <UserMeterCheck />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table celled>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={ 2 }>Reason for Register</Table.Cell>
                <Table.Cell width={ 8 } colSpan={ 3 }>
                  <Input />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Button content="save" />
        </Grid>
      </div>
    );
  }
}

export default UserRegisterForm;
