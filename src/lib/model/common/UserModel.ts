import autobind from '~/lib/ui/module/autobindDecorator';

@autobind
class UserModel {
  email: string = '';

  kycCode: string = '';

  idFilePath: string = '';

  idSerialNo: string = '';

  idTypeCode: string = '';

  certFilePath: string = '';

  certTypeCode: string = '';

  firstName: string = '';

  lastName: string = '';

  birth: string = '';

  sex: string = '';

  birthPlace: string = '';

  addrDetail: string = '';

  addrStreet: string = '';

  addrCity: string = '';

  wallet: string = '';

  elmoBlc: string = '';

  compId: string = '';

  regDt: string = '';

  modDt: string = '';

  status: string = '';

  constructor() {
    this.email = '';
    this.kycCode = '';
    this.idFilePath = '';
    this.idSerialNo = '';
    this.idTypeCode = '';
    this.certFilePath = '';
    this.certTypeCode = '';
    this.firstName = '';
    this.lastName = '';
    this.birth = '';
    this.sex = '';
    this.birthPlace = '';
    this.addrDetail = '';
    this.addrStreet = '';
    this.addrCity = '';
    this.wallet = '';
    this.elmoBlc = '';
    this.compId = '';
    this.regDt = '';
    this.modDt = '';
    this.status = '';
  }
}

export default UserModel;
