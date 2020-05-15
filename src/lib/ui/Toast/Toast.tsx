/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - Toast.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import {
  ToastContainer,
  ToastContainerProps,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toast extends Component<ToastContainerProps> {
  static defaultProps = {
    position: 'top-right',
    autoClose: 5000,
    draggable: true,
  };

  render(): React.ReactNode {
    return (
      <div>
        <ToastContainer
          enableMultiContainer
          { ...this.props }
        />
      </div>
    );
  }
}

export default Toast;