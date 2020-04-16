import { observable } from 'mobx';
import SampleModel from '~/lib/model/sample/SampleModel';

class SampleStore {
  @observable
  temp:string[] = [];

  static instance:SampleStore;
}

export default SampleStore;
