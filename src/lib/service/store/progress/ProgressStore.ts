import {observable, action } from 'mobx';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { clearTimeout, setTimeout } from 'timers';

declare module 'axios' {
  export interface AxiosRequestConfig {
    visible: boolean;
  }
}

class ProgressStore {

    static instance: ProgressStore;

    @observable
    store_active : boolean = false;

    @action
    start_interceptor(){
      let visible = true; // default = true
      let cnt_axios : number = 0;
      let nowTime : number;
      let timeout : NodeJS.Timeout;

    // 요청 인터셉터 추가
    axios.interceptors.request.use(
      (config:AxiosRequestConfig )=> {

      // 요청을 보내기 전에 수행할 일
      nowTime=performance.now();
      console.log('request', new Date());
      cnt_axios++;
      console.log('cnt_axios', cnt_axios);

      if(config.visible === true){
          visible = true;
      }
      else if(config.visible === false)
        visible = false;

      if(visible === true )
      {
        timeout = setTimeout(() => {
          this.store_active = true;
        }, 2000);
      }

      return config;

    },
       function (error) {
         // 오류 요청을 보내기전 수행할 일
         console.log('axios interceptor request error');
         return Promise.reject(error);
       });


    // 응답 인터셉터 추가
     axios.interceptors.response.use(
      (response:AxiosResponse )=> {

      const minimumDelay = 3000;
      const latency = performance.now() - nowTime;
      const shouldNotDelay = minimumDelay < latency;

      console.log('response', new Date());
      cnt_axios--;
      console.log('cnt_axios', cnt_axios);
      console.log('shouldNotDelay', shouldNotDelay);

      if (shouldNotDelay) {
         console.log('timeout', timeout);
        clearTimeout(timeout);
        console.log('timeout2', timeout);
      }

      if(cnt_axios === 0){
          console.log('inner');
          this.store_active = false;
      }

      return response;
      },
      function (error) {
         // 오류 응답을 처리
         console.log('axios interceptor response error');
         return Promise.reject(error);
      });

    }
}

ProgressStore.instance = new ProgressStore();

export default ProgressStore;
