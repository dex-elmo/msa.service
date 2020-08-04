import axios from 'axios';

const USER_URL = {
  GET_COMPANY_LIST: '/api/v2/user/companies',
  CREATE_USER: '/api/v2/user/signup',
  UPLOAD_FILE: '/api/v2/station/customer/approve',
};

class SearchApi {
  getBranchByType = async (type:string) => {
    const config = {
      params: {
        userType: type,
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
}

export default new SearchApi();
