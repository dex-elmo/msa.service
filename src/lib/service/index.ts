import ProgressStore from "./progress/store/ProgressStore";
import searchStore from './search/store/SearchStore';

const store = {
  progressStore: ProgressStore.instance
};

export  {
  store,
  ProgressStore
}

export default {
  searchStore
}
