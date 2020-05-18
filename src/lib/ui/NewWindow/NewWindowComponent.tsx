/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - NewWindow.ts
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */
import React, { Component } from 'react';
import ReactNewWindow, { INewWindowProps } from 'react-new-window';

interface NewWindowProps extends INewWindowProps {
}

class NewWindowComponent extends Component<NewWindowProps> {
  static defaultProps = {};

  render() {
    const {
      children,
      ...userProps
    } = this.props;

    return (
      <ReactNewWindow { ...userProps }>
        { children }
      </ReactNewWindow>
    );
  }
}

export default NewWindowComponent;
