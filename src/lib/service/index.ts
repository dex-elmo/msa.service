import AlertStore  from "./AlertStore";
import PaginationStore  from "./PaginationStore";

const store = {
  alertStore: AlertStore.instance,
  paginationStore: PaginationStore.instance,

};

export  {
  store,
  AlertStore,
  PaginationStore,
}
