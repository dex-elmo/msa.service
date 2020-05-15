import React, { Component } from 'react'
import docs from './docs'
import { Button } from "semantic-ui-react";
import * as alert from '~/lib/ui/module/alert';
import AlertComponent from "~/lib/ui/Alert";

export const Alert = (props: any) => {
  //
  class AlertStory extends Component {

    param = {
      size: 'mini',
      centered: true,
      onClosed: true,
      dimmer: true,
      actions: [{ key: '1', content: 'ok', color: 'green' }, { key: '2', content: 'close', color: 'grey' }]
    };

    showAlert(header: string | object, contents: string | object) {
      alert.show(header, contents, this.param);
    }

    render() {
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

      const param_noParam = {};

      return (
        <div>
          <Button onClick={() => this.showAlert(header, contents)}>Alert</Button>
          <Button onClick={() => this.showAlert(header, contents)}>no param</Button>

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
