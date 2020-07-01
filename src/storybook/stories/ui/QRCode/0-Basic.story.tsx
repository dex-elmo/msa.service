import React, { Component } from 'react';
import { QrCode } from '~/lib';
import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <QrCode
            value='{"userId": id, "type": type}'
          />
        </div>
      );
    }
  }

  return (
    <div>
      <Story { ...props } />
    </div>
  );
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|QrCode',
  component: docs.component,
  parameters: { ...docs.parameters },
};
