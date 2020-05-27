import React from 'react';
import {
  Button, Form, Grid, Input, Radio, Select, Table,
} from 'semantic-ui-react';
import UserAdditionalCertificate from '~/lib/ui/users/UserAdditionalCertificate';
import UserEmailCheck from '~/lib/ui/users/UserEmailCheck';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserPhotoIdCard from '~/lib/ui/users/UserPhotoIdCard';
import UserMeterCheck from '~/lib/ui/users/UserMeterCheck';
import SharedBirthOfDate from '~/lib/ui/shared/SharedBirthOfDate';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
}

interface State {
  esCompanyList: {key:string, value:string, text:string}[];
  vsCompanyList: {key:string, value:string, text:string}[];
  branch: string;
  esCompId: string;
  vsCompId: string;
  compId: string;
  email: string;
  emailCheck: boolean;
  idFilePath: string;
  idSerialNo: string;
  idTypeCode: string;
  password: string;
  passwordConfirm: string;
  fnm: string;
  lnm: string;
  birth: string;
  sex: string;
  birthPlace: string;
  addrDetail: string;
  addrStreet: string;
  addrCity: string;
  phoneNo: string;
  meterId: string;
  reason: string;
}

@autobind
class UserRegisterForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      esCompanyList: [],
      vsCompanyList: [],
      esCompId: '',
      vsCompId: '',
      branch: '',
      compId: '',
      email: '',
      emailCheck: false,
      idFilePath: '',
      idSerialNo: '',
      idTypeCode: '',
      password: '',
      passwordConfirm: '',
      fnm: '',
      lnm: '',
      birth: '',
      sex: 'M',
      birthPlace: '',
      addrDetail: '',
      addrStreet: '',
      addrCity: '',
      phoneNo: '',
      meterId: '',
      reason: '',
    };
  }

  makeVsCompanyList = async (compId:string) => {
    const returnData = await UserApi.getVstationList(compId, this.state.branch);

    const list = returnData.data.object;
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push({ key: list[i].userId, value: list[i].userId, text: list[i].userId });
    }
    this.setState({ vsCompanyList: arr });
  }

  handleBranchRadio = async (e: any, value: any) => {
    const branchType = value.value;
    this.setState({
      branch: branchType,
    });

    const returnData = await UserApi.getEstationList();

    const list = returnData.data.object;
    const arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push({ key: list[i].userId, value: list[i].userId, text: list[i].userId });
    }
    this.setState({ esCompanyList: arr });

    if (branchType === 'CVS') {
      await this.makeVsCompanyList(this.state.esCompId);
    }

    if (branchType === 'CES') {
      this.setState({ vsCompId: '' });
    }
  };

  selectEStation = async (e:any, value:any) => {
    const compId = value.value;
    this.setState({ esCompId: compId });

    await this.makeVsCompanyList(compId);
  }

  selectVStation = async (e:any, value:any) => {
    const compId = value.value;
    this.setState({ vsCompId: compId });
  }

  handleEmail = (input: string) => {
    this.setState({ email: input });
  };

  handleEmailCheck = (emailCheck: boolean) => {
    this.setState({ emailCheck });
  }

  handleIdFilePath = (input: string) => {
    this.setState({ idFilePath: input });
  }

  handleIdSerialNo = (input: string) => {
    this.setState({ idSerialNo: input });
  }

  handleIdTypeCode = (input: string) => {
    this.setState({ idTypeCode: input });
  }

  handlePassword = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ password: e.currentTarget.value });
  }

  handlePasswordConfirm = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ passwordConfirm: e.currentTarget.value });
  }

  handleFnm = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ fnm: e.currentTarget.value });
  }

  handleLnm = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ lnm: e.currentTarget.value });
  }

  handleBirth = (input: string) => {
    this.setState({ birth: input });
  }

  handleSex = (e: any, value: any) => {
    this.setState({ sex: value.sex });
  };

  handleBirthPlace = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ birthPlace: e.currentTarget.value });
  }

  handleAddrDtl = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ addrDetail: e.currentTarget.value });
  }

  handleAddrSt = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ addrStreet: e.currentTarget.value });
  }

  handleAddrCity = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ addrCity: e.currentTarget.value });
  }

  handlephoneNo = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ phoneNo: e.currentTarget.value });
  }

  handleMeterId = (input: string) => {
    this.setState({ meterId: input });
  };

  handleReason = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ reason: e.currentTarget.value });
  }

  handleFormSubmit = async () => {
    const {
      branch, compId, esCompId, vsCompId, email, emailCheck, idFilePath, idSerialNo, idTypeCode,
      password, passwordConfirm, fnm, lnm, birth, sex, birthPlace,
      addrDetail, addrCity, addrStreet, phoneNo, meterId, reason,
    } = this.state;

    const params = {
      user: {
        address: {
          city: addrCity,
          detailAddress: addrDetail,
          streetAddress: addrStreet,
        },
        birth: {
          birthPlace,
          birthday: birth,
        },
        cert: {
          certFilePath: 'aaaaa',
          certTypeCode: '123',
        },
        companyId: vsCompId === '' ? esCompId : vsCompId,
        gender: sex,
        id: {
          idFilePath,
          idSerialNo,
          idTypeCode,
        },
        meterId,
        name: {
          firstName: fnm,
          lastName: lnm,
        },
        password,
        phoneNo,
        reason,
        userId: email,
      },
    };
    console.log(params);

    const returnData = await UserApi.createUser(params);
    console.log(returnData);
  }

  render() {
    const {
      branch, esCompanyList, vsCompanyList, sex,
    } = this.state;

    return (
      <div>
        <h3>Register Member</h3>

        <h4>Member Info</h4>

        <Grid>
          <Form>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Registered Branch</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Radio
                      label="E/S"
                      name="stationGroup"
                      value="CES"
                      checked={branch === 'CES'}
                      onChange={this.handleBranchRadio}
                    />
                    <Radio
                      label="V/S"
                      name="stationGroup"
                      value="CVS"
                      checked={branch === 'CVS'}
                      onChange={this.handleBranchRadio}
                    />
                    <Select
                      placeholder="-------- E-Station --------"
                      options={esCompanyList}
                      onChange={this.selectEStation}
                    />
                    <Select
                      placeholder="-------- V-Station --------"
                      options={vsCompanyList}
                      onChange={this.selectVStation}
                      disabled={branch !== 'CVS'}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>E-Mail ID</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <UserEmailCheck
                      handleEmail={this.handleEmail}
                      handleEmailCheck={this.handleEmailCheck}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Photo ID card</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <UserPhotoIdCard
                      handleIdFilePath={this.handleIdFilePath}
                      handleIdSerialNo={this.handleIdSerialNo}
                      handleIdTypeCode={this.handleIdTypeCode}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Additional Certificate</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <UserAdditionalCertificate />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Password</Table.Cell>
                  <Table.Cell width={3}><Input type="password" onChange={this.handlePassword} /></Table.Cell>
                  <Table.Cell width={2}>Confirm Password</Table.Cell>
                  <Table.Cell width={3}><Input type="password" onChange={this.handlePasswordConfirm} /></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Name</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    First Name <Input onChange={this.handleFnm} />
                    Last Name <Input onChange={this.handleLnm} />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={2}>Date of Birth</Table.Cell>
                  <Table.Cell width={3}>
                    <SharedBirthOfDate
                      handleBirth={this.handleBirth}
                    />
                  </Table.Cell>
                  <Table.Cell width={2}>Gender</Table.Cell>
                  <Table.Cell width={3}>
                    <Radio
                      label="Male"
                      name="sexGroup"
                      sex="M"
                      checked={sex === 'M'}
                      onChange={this.handleSex}
                    />
                    <Radio
                      label="Female"
                      name="sexGroup"
                      sex="F"
                      checked={sex === 'F'}
                      onChange={this.handleSex}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Birthplace</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Input onChange={this.handleBirthPlace} />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Address</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Input placeholder="Details" onChange={this.handleAddrDtl} />
                    <Input placeholder="Street" onChange={this.handleAddrSt} />
                    <Input placeholder="City" onChange={this.handleAddrCity} />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Mobile Number</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Input onChange={this.handlephoneNo} />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Meter ID</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <UserMeterCheck handleMeter={this.handleMeterId} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Reason for Register</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Input onChange={this.handleReason} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <Button content="save" onClick={this.handleFormSubmit} />
          </Form>
        </Grid>
      </div>
    );
  }
}

export default UserRegisterForm;
