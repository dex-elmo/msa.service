import { action, observable } from 'mobx';

export class SearchStore {
  @observable
  searchParams:any = {};

  @action
  setSearchParamNull() {
    this.searchParams = {};
  }
}

export default new SearchStore();
