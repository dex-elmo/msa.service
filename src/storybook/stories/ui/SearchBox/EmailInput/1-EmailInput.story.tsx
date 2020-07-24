import React from 'react';
import docs from './docs';

import { EmailInput } from '~/lib';

export const Basic = (props:any) => <EmailInput propName="email" />;

Basic.story = {
  name: 'EmailInput',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
