import axios from 'axios';

class UserApi {
  checkEmail = async (email: string) => {
    const data = await axios.get(`/api/v2/user/${email}/check`);
    // console.log(data);
    return data;
  }

  checkMeter = async () => {
    console.log('check meter');
  }

  uploadFile = async () => {
    console.log('upload file');
  }

  getEstationList = async () => {
    const data = await axios.get('/api/v2/user/companies', {
      params: {
        userType: 'CES',
      },
    });
    return data;
  }

  getVstationList = async (companyId:string, branchType: string) => {
    const data = await axios.get('/api/v2/user/companies', {
      params: {
        companyId,
        companyType: branchType,
      },
    });
    return data;
  }

  createUser = async (params:object) => {
    console.log(params);
    const data = await axios.post('/api/v2/user/signup', null, {
      data: {
        address: params.user.address,
        birth: params.user.birth,
        cert: params.user.cert,
        id: params.user.id,
        companyId: params.user.companyId,
        gender: params.user.gender,
        name: params.user.name,
        password: params.user.password,
        reason: params.user.reason,
        userId: params.user.userId,
        phoneNo: params.user.phoneNo,
        meterId: params.user.meterId,
      },
    });
    return data;
  }
}

export default new UserApi();
