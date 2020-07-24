import React from 'react';
import docs from './docs';
import { RegisteredDate } from '~/lib';

export const Basic = (props:any) => <RegisteredDate propName="reg_dt" />;

Basic.story = {
  name: 'RegisteredDate',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
