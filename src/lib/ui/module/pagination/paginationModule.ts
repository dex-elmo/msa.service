import { PaginationStore } from '~/lib/service';

export function page(current: number, limit: number, totalCnt: number) {
  PaginationStore.instance.page(current, limit, totalCnt);
}

export function setCurrent(current: number) {
  PaginationStore.instance.setCurrent(current);
}

