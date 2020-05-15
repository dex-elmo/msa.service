import ProgressStore from "./progress/store/ProgressStore";
import searchStore from './search/store/SearchStore';
import AlertStore  from "./AlertStore";

const store = {
  alertStore: AlertStore.instance,
  progressStore: ProgressStore.instance
};

export  {
  store,
  ProgressStore
}

export default {
  searchStore,
  AlertStore
}
