import { observable, action } from 'mobx'

class PaginationStore {

  static instance: PaginationStore;

  @observable
  current: number = 1;

  @observable
  limit: number = 10;

  @observable
  totalPage: number = 0;

  @action
  page(current:number, limit: number, totalCnt: number) {
    this.current = current;
    this.limit = limit;
    this.totalPage = Math.ceil(totalCnt/limit);;
  }
}

PaginationStore.instance = new PaginationStore();

export default PaginationStore;
