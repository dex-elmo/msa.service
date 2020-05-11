import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ProgressStore } from '~/lib/service';

export function start_interceptor() {
  ProgressStore.instance.start_interceptor();
}

