import React from 'react';
import docs from './docs';

import { InputComponent } from '~/lib';

export const Basic = (props:any) => <InputComponent propName="InputName" />;

Basic.story = {
  name: 'InputComponent',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
