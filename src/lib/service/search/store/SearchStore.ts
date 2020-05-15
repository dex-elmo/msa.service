import { observable } from 'mobx';

export class SearchStore {
  @observable
  searchParams:any = {}; // Type을 any로 사용해도 되는가?
}

export default new SearchStore();
