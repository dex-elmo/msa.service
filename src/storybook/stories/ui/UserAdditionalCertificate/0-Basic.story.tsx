import React, { Component } from 'react';

import docs from './docs';
import { UserAdditionalCertificate } from '~/lib';

export const Basic = (props: any) => {
  class Story extends Component {
    handleCertFilePath = (input: string) => {
      this.setState({ certFilePath: input });
    }

    handleCertTypeCode = (input: string) => {
      this.setState({ certTypeCode: input });
    }

    render() {
      return (
        <div>
          <UserAdditionalCertificate
            handleCertFilePath={this.handleCertFilePath}
            handleCertTypeCode={this.handleCertTypeCode}
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
  title: 'component|UserAdditionalCertificate',
  component: docs.component,
  parameters: { ...docs.parameters },
};
