import React from 'react';
import docs from './docs';

import { SearchConfig, SelectComponent, SelectOption } from '~/lib';

export const Basic = (props:any) => <SelectComponent propName={SearchConfig.SELECT.TRANSACTION_HISTORY.HEADER} option={SelectOption.transactionHistory} />;

Basic.story = {
  name: 'Select',
};

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
};
