import React from 'react';
import docs from './docs';

import { Email } from '~/lib';

export const Basic = (props:any) => <Email propName="email" />;

Basic.story = {
  name: 'Email',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
