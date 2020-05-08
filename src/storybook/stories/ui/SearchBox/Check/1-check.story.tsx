import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const CheckStory = (props:any) => {
  return <SearchBox.Check {...props} />
}

CheckStory.story = {
  name: "Check"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
