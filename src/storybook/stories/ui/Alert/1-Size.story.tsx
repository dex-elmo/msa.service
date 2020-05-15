import React, { Component } from 'react'
import docs from './docs'
import {Button} from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Size = (props: any) => {
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

      const param_mini = {
        header: <h3>header</h3>,
        size : 'mini',
        actions: [{key : '1', content:'ok', color:'green'}]
      };
      const param_tiny = {
        header: <h3>header</h3>,
        size : 'tiny',
        actions: [{key : '1', content:'ok', color:'green'}]
      };
      const param_small = {
        header: <h3>header</h3>,
        size : 'small',
        actions: [{key : '1', content:'ok', color:'green'}]
      };
      const param_large = {
        header: <h3>header</h3>,
        size : 'large',
        actions: [{key : '1', content:'ok', color:'green'}]
      };

      return (
        <div>
          <Button onClick={() => this.showAlert(contents, param_mini)}>mini</Button>
          <Button onClick={() => this.showAlert(contents, param_tiny)}>tiny</Button>
          <Button onClick={() => this.showAlert(contents, param_small)}>small</Button>
          <Button onClick={() => this.showAlert(contents, param_large)}>large</Button>

          <AlertComponent/>
        </div>
      )
    }
  }

  return <AlertStory {...props} />
};

Size.story = {
  name: 'size',
};

export default {
  title: 'component|Alert',
  component: docs.component,
  parameters: { ...docs.parameters },
}
