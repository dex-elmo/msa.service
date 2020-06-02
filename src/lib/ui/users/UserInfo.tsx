import React from 'react';
import {
  Button, Form, Grid, Input, Radio, Select, Table,
} from 'semantic-ui-react';
import moment from 'moment';
import UserAdditionalCertificate from '~/lib/ui/users/UserAdditionalCertificate';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserPhotoIdCard from '~/lib/ui/users/UserPhotoIdCard';
import SharedBirthOfDate from '~/lib/ui/shared/SharedBirthOfDate';
import UserApi from '~/lib/service/users/api/UserApi';
import UserModel from '~/lib/model/common/UserModel';

interface Props {
  handleModifyUser:any;
  closeWindow:any;
}

interface State {
  idFilePath: string;
  idSerialNo: string;
  idTypeCode: string;
  certFilePath: string;
  certTypeCode: string;
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
  reason: string;
  userModel: UserModel;
}

@autobind
class UserInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      idFilePath: '',
      idSerialNo: '',
      idTypeCode: '',
      certFilePath: '',
      certTypeCode: '',
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
      reason: '',
      userModel: new UserModel(),
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    const { data } = await UserApi.getUserInfo('aaaaa');
    // console.log(data.object.user);
    // console.log(data.object.detail);

    const { user } = data.object;
    const { detail } = data.object;

    const userModel = new UserModel();
    userModel.email = user.userId;
    userModel.kycCode = user.kycCode;
    userModel.idFilePath = user.identification.idFilePath;
    userModel.idTypeCode = user.identification.idTypeCode;
    userModel.certFilePath = user.cert.certFilePath;
    userModel.certTypeCode = user.cert.certTypeCode;
    userModel.firstName = user.name.firstName;
    userModel.lastName = user.name.lastName;
    userModel.birth = user.birth.birthday;
    userModel.birthPlace = user.birth.birthPlace;
    userModel.sex = user.gender;
    userModel.addrDetail = user.address.detailAddress;
    userModel.addrStreet = user.address.streetAddress;
    userModel.addrCity = user.address.city;
    userModel.compId = user.companyId;
    userModel.regDt = user.created;
    userModel.modDt = user.updated;
    userModel.status = user.status;

    console.log(userModel);

    this.setState({
      userModel,
      sex: userModel.sex,
    });
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

  handleCertFilePath = (input: string) => {
    this.setState({ certFilePath: input });
  }

  handleCertTypeCode = (input: string) => {
    this.setState({ certTypeCode: input });
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

  handleReason = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ reason: e.currentTarget.value });
  }

  handleFormSubmit = async () => {
    const {
      idFilePath, idSerialNo, idTypeCode, certFilePath, certTypeCode, password, passwordConfirm,
      fnm, lnm, birth, sex, birthPlace, addrDetail, addrCity, addrStreet, reason,
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
          certFilePath,
          certTypeCode,
        },
        gender: sex,
        id: {
          idFilePath,
          idSerialNo,
          idTypeCode,
        },
        name: {
          firstName: fnm,
          lastName: lnm,
        },
        password,
        reason,
      },
    };
    console.log(params);

    // const returnData = await UserApi.createUser(params);
    // console.log(returnData);
    //
    // if (returnData.data.status) {
    //   console.log('save success');
    //   this.props.handleModifyUser(true);
    //   this.props.closeWindow();
    // } else {
    //   console.log('fail fail');
    //   this.props.handleModifyUser(false);
    // }
  }

  render() {
    const {
      sex, userModel,
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
                  <Table.Cell width={2}>E-Mail ID</Table.Cell>
                  <Table.Cell width={3}>{userModel.email}</Table.Cell>
                  <Table.Cell width={2}>KYC Level</Table.Cell>
                  <Table.Cell width={3}>{userModel.kycCode}</Table.Cell>
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
                    {userModel.certFilePath !== ''
                      ? (
                        <UserAdditionalCertificate
                          handleCertFilePath={this.handleCertFilePath}
                          handleCertTypeCode={this.handleCertTypeCode}
                          defaultCertFilePath={userModel.certFilePath}
                          defaultCertTypeCode={userModel.certTypeCode}
                        />
                      )
                      : (
                        <UserAdditionalCertificate
                          handleCertFilePath={this.handleCertFilePath}
                          handleCertTypeCode={this.handleCertTypeCode}
                        />
                      )}
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
                    First Name
                    <Input
                      onChange={this.handleFnm}
                      defaultValue={userModel.firstName}
                    />
                    Last Name
                    <Input
                      onChange={this.handleLnm}
                      defaultValue={userModel.lastName}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell width={2}>Date of Birth</Table.Cell>
                  <Table.Cell width={3}>
                    {userModel.birth !== ''
                      ? (
                        <SharedBirthOfDate
                          handleBirth={this.handleBirth}
                          defaultBirth={userModel.birth}
                        />
                      )
                      : (
                        <SharedBirthOfDate
                          handleBirth={this.handleBirth}
                        />
                      )}
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
                    <Input
                      onChange={this.handleBirthPlace}
                      defaultValue={userModel.birthPlace}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Address</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>
                    <Input
                      onChange={this.handleAddrDtl}
                      defaultValue={userModel.addrDetail}
                    />
                    <Input
                      onChange={this.handleAddrSt}
                      defaultValue={userModel.addrStreet}
                    />
                    <Input
                      onChange={this.handleAddrCity}
                      defaultValue={userModel.addrCity}
                    />
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Mobile Number</Table.Cell>
                  <Table.Cell width={8} colSpan={3} />
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Wallet</Table.Cell>
                  <Table.Cell width={3} />
                  <Table.Cell width={2}>Total Elmo Balance</Table.Cell>
                  <Table.Cell width={3} />
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Registered Branch</Table.Cell>
                  <Table.Cell width={3}>{userModel.compId}</Table.Cell>
                  <Table.Cell width={2}>Registered Date</Table.Cell>
                  <Table.Cell width={3}>{userModel.regDt}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Last Used Date</Table.Cell>
                  <Table.Cell width={3}>{userModel.modDt}</Table.Cell>
                  <Table.Cell width={2}>Meter</Table.Cell>
                  <Table.Cell width={3} />
                </Table.Row>

                <Table.Row>
                  <Table.Cell width={2}>Status</Table.Cell>
                  <Table.Cell width={8} colSpan={3}>{userModel.status}</Table.Cell>
                </Table.Row>

              </Table.Body>
            </Table>

            <Table celled>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Reason for Modify</Table.Cell>
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

export default UserInfo;
