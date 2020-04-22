import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { AlertStore } from '~/lib/service';
import autobind from "~/lib/ui/module/autobindDecorator";

interface Props {
  alertStore?: AlertStore,
  size:any;
  centered:boolean;
  onClosed:boolean;
  header:boolean;
  headerContent:string;
  content:boolean;
  contentContent:string;
  dimmer:any;
  actions:actions[];
  closeIcon:boolean;
}

interface actions {
  key: string;
  content: string;
  color: string;
}

@autobind
export default class Alert extends Component<Props>{
  constructor(props:any) {
    super(props);
  }

  static defaultProps = {
    size: 'mini',
    centered: true,
    onClosed: true,
    dimmer: true,
    header: true,
    content: true,
    actions: null,
    closeIcon: false
  };

  state = { open: false };

  show = (size:any) => () =>        this.setState({ open: true });
  close = () => this.setState({ open: false });

  render(){
    const style1 ={
      marginLeft:'80px',
      width:'200px'
    };

    const { open , contentContent} = this.props.alertStore!;
    const {size, centered, onClosed, header, headerContent, content, dimmer, actions, closeIcon } = this.props;

    return(
      <>
        <Button onClick={this.show('fullscreen')} style={style1}>Alert</Button>

        <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClosed || actions === null ? this.close : this.show} closeIcon={closeIcon}>
          {header ? <Modal.Header content={headerContent} /> : ''}
          {content ? <Modal.Content content={contentContent} /> : ''}
          {actions !== null ? <Modal.Actions actions={actions} onActionClick={(event, data) => { this.close(); }} /> : ''}
        </Modal>
      </>
    )
  }

  // render(){
  //   const style1 ={
  //     marginLeft:'80px',
  //     width:'200px'
  //   };
  //
  //   const {open} = this.state;
  //   const {size, centered, onClosed, header, headerContent, content, contentContent, dimmer, actions, closeIcon } = this.props;
  //
  //   return(
  //     <>
  //       <Button onClick={this.show('fullscreen')} style={style1}>Alert</Button>
  //
  //       <Modal open={open} size={size} centered={centered} dimmer={dimmer} onClose={onClosed || actions === null ? this.close : this.show} closeIcon={closeIcon}>
  //         {header ? <Modal.Header content={headerContent} /> : ''}
  //         {content ? <Modal.Content content={contentContent} /> : ''}
  //         {actions !== null ? <Modal.Actions actions={actions} onActionClick={(event, data) => { this.close(); }} /> : ''}
  //       </Modal>
  //     </>
  //   )
  // }
}

// export default Alert;x
