import React, { Component } from 'react';

import docs from './docs';
import { UserPhotoIdCard } from '~/lib';

export const Basic = (props: any) => {
  class Story extends Component {
    handleIdFilePath = (input: string) => {
      this.setState({ idFilePath: input });
    }

    handleIdSerialNo = (input: string) => {
      this.setState({ idSerialNo: input });
    }

    handleIdTypeCode = (input: string) => {
      this.setState({ idTypeCode: input });
    }

    render() {
      return (
        <div>
          <UserPhotoIdCard
            handleIdFilePath={this.handleIdFilePath}
            handleIdSerialNo={this.handleIdSerialNo}
            handleIdTypeCode={this.handleIdTypeCode}
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
  title: 'component|UserPhotoIdCard',
  component: docs.component,
  parameters: { ...docs.parameters },
};
