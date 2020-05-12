import ProgressStore from "./store/progress/ProgressStore";
import searchStore from './store/search/SearchStore';

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
