import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Dim = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(header:string|object, contents:string|object, param:any){
      alert.show(header, contents, param);
    }

    render () {
      const header =
        <div>
          <h3>header</h3>
        </div>
      ;

      const contents =
        <div>
          contents
        </div>
      ;

      const param_true = {
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      const param_blurring = {
        dimmer: 'blurring',
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      const param_inverted = {
        dimmer: 'inverted',
        actions: [{key : '1', content:'ok', color:'green'}]
      };
      return (
        <div>
          <Button onClick={() => this.showAlert(header, contents, param_true)}>Default</Button>
          <Button onClick={() => this.showAlert(header, contents, param_blurring)}>Blurring</Button>
          <Button onClick={() => this.showAlert(header, contents, param_inverted)}>Inverted</Button>

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
