import {observable, action } from 'mobx';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


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
      let timeout_arr : NodeJS.Timeout[] = [];
      let timeout : NodeJS.Timeout;

    // 요청 인터셉터 추가
    axios.interceptors.request.use(
      (config:AxiosRequestConfig )=> {

      // 요청을 보내기 전에 수행할 일
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
        }, 1500);
        timeout_arr.push(timeout);
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

      console.log('response', new Date());
      cnt_axios--;
      console.log('cnt_axios', cnt_axios);
      if(cnt_axios === 0){
          timeout_arr.map((timeout)=>(
            clearTimeout(timeout)
          ));

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
