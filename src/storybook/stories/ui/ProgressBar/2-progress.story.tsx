import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'
import docs from './docs'
import ProgressComponent from "~/lib/ui/ProgressBar";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import autoBind from 'auto-bind';

import * as progress from '~/lib/ui/module/progress/';
import { request } from 'http';


export const Basic = (props: any) => {
  //
  class ProgressStory extends Component{

    /** 사용법 : store 에서 axios 사용할 때 */
     /** 사용 여부, default visible : true
       axios.post("/",{
                                params: {
                                        visible:true
                                        }
                              })*/


    componentDidMount(){
      autoBind(this);
      this.startInterceptor();
    }

    startInterceptor(){
      progress.start_interceptor();
    }


    showProgress(){

        const mock = new MockAdapter(axios);
        mock.onPost("/").reply(200, {
            "data": [
                {
                    "onoff":"test"
                }
              ]
        });
        return axios.post("/",{
                                params: {
                                        visible:true
                                        }
                              })
        .then(request => {});  
    }
    Progress(){
      axios.get('/',{
                      params: {
                              visible:true
                              }
                    })
      .catch(function (error) {
        if (error.response) {
          console.log('axios get error response',error.response.status);
        }
        else if (error.request) {
          console.log('axios get error request',error.request);
        }
        else {
          console.log('axios get error', error.message);
        }
        console.log(error.config);
      });

    }
    render () {
      return (
        
        <div>
            {/* <Button onClick={()=> this.showProgress()}>on </Button>  */}
            <Button onClick={()=> this.Progress()}>로딩바</Button>
            <ProgressComponent />
              
        </div>
      )
    }
  }

  return <ProgressStory {...props} />
}

Basic.story = {
  name: 'progress',
}

export default {
  title: 'component|Progress',
  component: docs.component,
  parameters: { ...docs.parameters },
}
