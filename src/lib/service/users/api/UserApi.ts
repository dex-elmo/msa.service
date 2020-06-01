import axios from 'axios';

const USER_URL = {
  GET_COMPANY_LIST: '/api/v2/user/companies',
  CREATE_USER: '/api/v2/user/signup',
  UPLOAD_FILE: '/api/v2/station/customer/approve',
};

class UserApi {
  getCompanyList = async (type: { userType: string }) => {
    const config = {
      params: {
        ...type,
      },
    };

    const results: any[] = [];
    try {
      const resp = await axios.get(USER_URL.GET_COMPANY_LIST, config);
      if (resp.status === 200) {
        const { object: companyList } = resp.data;

        for (let i = 0; i < companyList.length; i++) {
          results.push({
            key: companyList[i].userId,
            value: companyList[i].userId,
            text: `${companyList[i].alias} (${companyList[i].userId})`,
          });
        }
      }
    } catch (error) {
      return {
        error,
        results,
      };
    }
    return { results };
  };

  checkEmail = async (email: string) => {
    const data = await axios.get(`/api/v2/user/${email}/check`);
    // console.log(data);
    return data;
  };

  checkMeter = async () => {
    console.log('check meter');
  };

  uploadFile = async (file: any) => {
    const data = await axios.post(USER_URL.UPLOAD_FILE, file);
    console.log(data);
    const filePath = data.data.object;
    return filePath;
  };

  getEstationList = async () => {
    const data = await axios.get(USER_URL.GET_COMPANY_LIST, {
      params: {
        userType: 'CES',
      },
      // visible: false,
    });
    return data;
  };

  getVstationList = async (companyId: string, branchType: string) => {
    const data = await axios.get(USER_URL.GET_COMPANY_LIST, {
      params: {
        companyId,
        companyType: branchType,
      },
      // visible: false,
    });
    return data;
  };

  createUser = async (params: any) => {
    const data = await axios.post(USER_URL.CREATE_USER, params.user);
    return data;
  };

  getUserInfo = async (userId: string) => {
    const data = await axios.get(`/api/v2/user/${userId}/detail`);
    return data;
  }
}

export default new UserApi();
