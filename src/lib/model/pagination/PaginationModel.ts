import { observable } from 'mobx'

class PaginationModel {

  @observable
  currentPage: number;

  @observable
  limitPage: number;

  @observable
  totalPage: number;

  constructor(currentPage: number, limitPage: number, totalData: number) {
    this.currentPage = currentPage;
    this.limitPage = limitPage;
    this.totalPage = Math.ceil(totalData/limitPage);;
  }
}

export default PaginationModel;
