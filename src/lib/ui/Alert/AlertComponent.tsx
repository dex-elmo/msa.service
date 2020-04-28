import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { AlertStore, store } from '~/lib/service';
import autobind from "~/lib/ui/module/autobindDecorator";
import * as alert from '~/lib/ui/module/alert/index';
import {observer} from "mobx-react";

interface Props {
  alertStore?: AlertStore,
}

@observer
@autobind
class Alert1 extends Component<Props>{
  constructor(props:any) {
    super(props);
  }

  close = () => {
    alert.close();
  };

  show = () =>{
  };

  render(){
    const { open , contentContent, size, centered, onClosed, header, headerContent, content, dimmer, actions, closeIcon} = store.alertStore;

    return(
      <>
        <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClosed || actions === null ? this.close : this.show} closeIcon={closeIcon}>
          {header ? <Modal.Header content={headerContent} /> : ''}
          {content ? <Modal.Content content={contentContent} /> : ''}
          {actions !== null ? <Modal.Actions actions={actions} onActionClick={(event, data) => { this.close(); }} /> : ''}
        </Modal>
      </>
    )
  }

}

export default Alert1;
