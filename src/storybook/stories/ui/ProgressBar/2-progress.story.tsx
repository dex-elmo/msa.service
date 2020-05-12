import React, { Component,CSSProperties } from 'react'
import { Button} from 'semantic-ui-react'
import docs from './docs'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import autoBind from 'auto-bind';
import ProgressBarView from "~/lib/ui/ProgressBar";
import { ProgressModule } from '~/lib/ui/module';



export const Basic = (props: any) => {
  //속성 : visible   , default true
  // axios.post("/", {      }, { visible:true }  )
  // axios.get('/',{ visible:true } )
  
  class ProgressStory extends Component{
    
 
    componentDidMount(){
      autoBind(this);
      // this.startInterceptor();
    }

    // startInterceptor(){
    //   ProgressModule.start_interceptor();
    // }


    postProgress(){
       
        const mock = new MockAdapter(axios);
        mock.onPost("/").reply(function (config) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve([200, { }]);
            }, 1000);
          });
        });

        return axios.post("/", {}, { visible:true }  )
          .then(request => {});
      
    }
 
    getProgress(){

      axios.get('/',{ visible:true } )

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
            <Button onClick={()=> this.postProgress()}>로딩바 버튼</Button>
            <ProgressBarView />

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
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
}
