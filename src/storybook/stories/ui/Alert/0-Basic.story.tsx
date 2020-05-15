import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Alert = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(contents:string|object, param:any){
      alert.alert(contents, param, this.console);
    }

    console(){
      console.log('promise');
    }

    render () {
      const contents =
        <div>
          contents
        </div>
      ;

      const param = {
        header: <h3>header</h3>,
        size : 'mini',
        centered : true,
        onClosed : true,
        dimmer : true,
        actions: [{key : '1', content:'ok', color:'green'} , {key : '2', content:'close', color:'grey'}]
      };

      const no_param = {}

      return (
        <div>
          <Button onClick={() => this.showAlert(contents, param)}>Alert</Button>
          <Button onClick={() => this.showAlert(contents, no_param)}>no_param</Button>

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
  title: 'component|Alert',
  component: docs.component,
  parameters: { ...docs.parameters },
}
