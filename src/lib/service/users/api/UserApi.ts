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
    const data = await axios.get('/api/v2/user/companys', {
      params: {
        userType: 'CES',
      },
    });
    return data;
  }

  getVstationList = async (companyId:string, branchType: string) => {
    const data = await axios.get('/api/v2/user/companys', {
      params: {
        companyId: companyId,
        companyType: branchType,
      },
    });
    return data;
  }


}

export default new UserApi();
