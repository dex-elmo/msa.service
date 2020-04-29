import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import App from '~/lib/ui/Common/App';
import AlertComponent from "~/lib/ui/Alert";

export const Alert = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(param:any){
      alert.show('header', 'content', param);
    }

    render () {
      let param = {
        size : 'mini',
        centered : true,
        // onClosed : false,
        header : true,
        content : true,
        dimmer : true,
        closeIcon : false,
        actions: [{key : '1', content:'yes', color:'green'} , {key : '2', content:'no', color:'grey'}]
      };

      return (
        <div>
          <Button onClick={() => this.showAlert(param)}>Alert</Button>

          {/*<App/>*/}
          <AlertComponent/>
        </div>
      )
    }
  }

  return <AlertStory {...props} />
};

Alert.story = {
  name: 'alert',
};

export default {
  title: 'component|Alert',
  component: docs.component,
  parameters: { ...docs.parameters },
}
