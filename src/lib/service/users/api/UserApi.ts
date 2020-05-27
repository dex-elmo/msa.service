import axios from 'axios';

class UserApi {
  getCompanyList = async (url: string, type: any) => {
    const config = {
      params: {
        ...type,
      },
    };

    let apiUrl = url;
    if (!apiUrl) {
      apiUrl = '/api/v2/user/companies';
    }

    const results: any[] = [];
    try {
      const resp = await axios.get(apiUrl, config);
      if (resp.status === 200) {
        const { object: companyList } = resp.data;

        console.log(companyList);

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
}

export default new UserApi();
