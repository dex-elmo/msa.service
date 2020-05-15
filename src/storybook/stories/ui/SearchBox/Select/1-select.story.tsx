import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const SelectStory = (props:any) => {
  return <SearchBox.Select {...props} />
}

SelectStory.story = {
  name: "Select"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
