import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Centered = (props: any) => {
  //
  class AlertStory extends Component {

    showAlert(contents:string|object, param:any){
      alert.show(contents, param);
    }

    render () {
      const contents =
        <div>
          contents
        </div>
      ;

      const param = {
        header: <h3>header</h3>,
        centered : true,
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      const param_nonCentered = {
        header: <h3>header</h3>,
        centered : false,
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      return (
        <div>
          <Button onClick={() => this.showAlert(contents, param)}>Centered</Button>
          <Button onClick={() => this.showAlert(contents, param_nonCentered)}>Non-Centered</Button>

          <AlertComponent/>
        </div>
      )
    }
  }

  return <AlertStory {...props} />
};

Centered.story = {
  name: 'centered',
};

export default {
  title: 'component|Alert',
  component: docs.component,
  parameters: { ...docs.parameters },
}
