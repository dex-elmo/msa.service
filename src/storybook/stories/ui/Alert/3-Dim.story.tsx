import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Dim = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(contents:string|object, param:any){
      alert.alert(contents, param);
    }

    render () {
      const contents =
        <div>
          contents
        </div>
      ;

      const param_true = {
        header: <h3>header</h3>,
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      const param_blurring = {
        header: <h3>header</h3>,
        dimmer: 'blurring',
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      const param_inverted = {
        header: <h3>header</h3>,
        dimmer: 'inverted',
        actions: [{key : '1', content:'ok', color:'green'}]
      };
      return (
        <div>
          <Button onClick={() => this.showAlert(contents, param_true)}>Default</Button>
          <Button onClick={() => this.showAlert(contents, param_blurring)}>Blurring</Button>
          <Button onClick={() => this.showAlert(contents, param_inverted)}>Inverted</Button>

          <AlertComponent/>
        </div>
      )
    }
  }

  return <AlertStory {...props} />
};

Dim.story = {
  name: 'dimmer',
};

export default {
  title: 'component|Alert',
  component: docs.component,
  parameters: { ...docs.parameters },
}
