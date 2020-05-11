import {observable, action, computed} from 'mobx';
import autobind from "~/lib/ui/module/autobindDecorator";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { promises, resolve } from 'dns';
import { request } from 'http';



@autobind
class ProgressStore {
    static instance: ProgressStore;

    @observable
    store_active : boolean = false;
    
    @action
    start_interceptor(){
          
    // 요청 인터셉터 추가
    axios.interceptors.request.use(
      (config:AxiosRequestConfig )=> {
      // 요청을 보내기 전에 수행할 일
      // ...
      // if (_isMounted) {
      console.log('config', new Date());
        
        const TOKEN = 'ABC';
        localStorage.setItem('token', TOKEN);

        // console.log('111');
        // setTimeout(() =>  {alert('bye');} , 5000)

        // config.headers.Authorization = localStorage.getItem('token');
        this.store_active = true;
      // }
      return config;
    },
       function (error) {
         // 오류 요청을 보내기전 수행할 일
         // ...
         console.log('axios interceptor request error');
         return Promise.reject(error);
       });
    

    // 응답 인터셉터 추가
     axios.interceptors.response.use(
    

      (response:AxiosResponse )=> {
       let {status} = response;
       console.log('response', new Date());
    
        //  if (_isMounted && status == 200) {
          //  console.log('333');
           this.store_active = false;
           
            
          // }
          return response;
       },
       function (error) {

         // 오류 응답을 처리
         // ...
         console.log('axios interceptor response error');
         return Promise.reject(error);
       });
            
    }
}

ProgressStore.instance = new ProgressStore();

export default ProgressStore;
