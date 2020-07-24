import React from 'react';
import docs from './docs';

import { Status } from '~/lib';

export const Basic = (props:any) => <Status propName="status" />;

Basic.story = {
  name: 'Status',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
