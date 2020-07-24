import { action, observable } from 'mobx';
import moment from 'moment';

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
}

export default new SearchStore();
