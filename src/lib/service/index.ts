import ProgressStore from "./store/progress/ProgressStore";
import searchStore from './store/search/SearchStore';

const store = {
  progressStrore: ProgressStore.instance
};

export  {
  store,
  ProgressStore
}

export default {
  searchStore
}
