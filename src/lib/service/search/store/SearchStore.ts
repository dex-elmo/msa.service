import { action, observable } from 'mobx';
import moment from 'moment';
import SearchApi from '~/lib/service/search/api/SearchApi';

export class SearchStore {
  @observable
  searchParams:any = {
    // submit 시 선택되지않으면 초기화해주어야함
    // reg_dt: {
    //   startDate: moment().subtract(7, 'days').format('YYYYMMDD'),
    //   endDate: moment().format('YYYYMMDD'),
    // },
  };

  @action
  setSearchParamNull() {
    this.searchParams = {};
  }

  @action
  getBranchByType = (branchType:string) => {
    SearchApi.getBranchByType(branchType);

    const option = [
      { key: 'aaa', value: 'aaa', text: 'aaa' },
      { key: 'bbb', value: 'bbb', text: 'bbb' },
      { key: 'ccc', value: 'ccc', text: 'ccc' },
    ];

    return option;
  };
}

export default new SearchStore();
