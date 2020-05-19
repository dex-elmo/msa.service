import React, { Component } from 'react';
// import { Modal } from 'semantic-ui-react'
// import { AlertStore, store } from '~/lib/service';
// import autobind from "~/lib/ui/module/autobindDecorator";
// import * as alert from '~/lib/ui/module/alert/index';
// import {observer} from "mobx-react";

import AlertStore from '~/lib/service/AlertStore';

interface Props {
  // alertStore?: AlertStore,
}

// @observer
// @autobind
class App extends Component<Props> {
  close = () => {
    // alert.close();
  };

  show = () => {
  };

  render() {
    return (
      <div />
    );
  }
}

export default App;
