import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const InputStory = (props:any) => {
  return <SearchBox.Input {...props} />
}

InputStory.story = {
  name: "Input"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
