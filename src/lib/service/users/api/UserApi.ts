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

  uploadFile = async (file:any) => {
    console.log(file);
    const data = await axios.post('/api/v2/station/customer/approve', file);
    return data;
  }

  getEstationList = async () => {
    const data = await axios.get('/api/v2/user/companies', {
      params: {
        userType: 'CES',
      },
      // visible: false,
    });
    return data;
  }

  getVstationList = async (companyId:string, branchType: string) => {
    const data = await axios.get('/api/v2/user/companies', {
      params: {
        companyId,
        companyType: branchType,
      },
      // visible: false,
    });
    return data;
  }

  createUser = async (params:any) => {
    const data = await axios.post('/api/v2/user/signup', params.user);
    return data;
  }
}

export default new UserApi();
