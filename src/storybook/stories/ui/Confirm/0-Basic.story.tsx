import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Alert = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(contents:string|object, param:any){
      alert.confirm(contents, param, this.func);
    }

    func(){
      console.log('promise');
    }

    render () {
      const contents =
        <div>
          confirm
        </div>
      ;

      const param = {
        header: <h3>header</h3>,
        size : 'mini',
        centered : true,
        onClosed : true,
        dimmer : true,
        actions: [{key : '1', content:'confirm', color:'green'} , {key : '2', content:'cancel', color:'grey'}]
      };

      return (
        <div>
          <Button onClick={() => this.showAlert(contents, param)}>Confirm</Button>

          <AlertComponent/>
        </div>
      )
    }
  }

  return <AlertStory {...props} />
};

Alert.story = {
  name: 'basic',
};

export default {
  title: 'component|Confirm',
  component: docs.component,
  parameters: { ...docs.parameters },
}
