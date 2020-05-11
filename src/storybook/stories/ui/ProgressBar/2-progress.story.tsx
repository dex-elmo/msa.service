import React, { Component,CSSProperties } from 'react'
import { Button} from 'semantic-ui-react'
import docs from './docs'
import ProgressComponent from "~/lib/ui/ProgressBar";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import autoBind from 'auto-bind';
import * as progress from '~/lib/ui/module/progress/';

export const Basic = (props: any) => {
  //
  class ProgressStory extends Component{

    componentDidMount(){
      autoBind(this);
      this.startInterceptor();
    }

    startInterceptor(){
      progress.start_interceptor();
    }


    postProgress(){

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

    getProgress(){
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
    
      const style1:CSSProperties ={
        backgroundColor : 'pink'
      }

       
      return (
        <div style={style1}>
            <Button onClick={()=> this.getProgress()}>로딩바 버튼</Button>
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
