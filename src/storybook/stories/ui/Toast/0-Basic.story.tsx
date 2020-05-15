/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Basic.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { toast } from '~/lib/ui';

import NuriToast from '~/lib/ui/Toast';
import docs from './docs';

export const Toast = (props: any) => {
  class ToastStory extends Component {
    notify = () => {
      toast('Default Notification');

      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_CENTER,
      });

      toast.error('Error Notification', {
        position: toast.POSITION.TOP_LEFT,
      });

      toast.warn('Warning Notification', {
        position: toast.POSITION.BOTTOM_LEFT,
      });

      toast.info('Info Notification', {
        position: toast.POSITION.BOTTOM_CENTER,
      });

      toast('Custom Style Notification with css class', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar',
      });
    };

    render() {
      return (
        <div>
          <Button
            circular
            color="instagram"
            onClick={ this.notify }
          >
            토스트 날려죠!
          </Button>
        </div>
      );
    }
  }

  return (
    <div>
      <NuriToast />
      <ToastStory { ...props } />
    </div>
  );
};

Toast.story = {
  name: 'example',
};

export default {
  title: 'component|Toast',
  component: docs.component,
  parameters: { ...docs.parameters },
};
