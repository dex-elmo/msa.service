import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const RadioStory = (props:any) => {
  return <SearchBox.Radio {...props} />
}

RadioStory.story = {
  name: "Radio"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
