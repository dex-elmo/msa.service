import { observable, action } from 'mobx';

export class SearchModel {
  @observable
  searchParams:any = {}; // Type을 any로 사용해도 되는가?
}

export default new SearchModel();
