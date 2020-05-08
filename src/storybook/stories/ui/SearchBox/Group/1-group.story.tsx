import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const GroupStory = (props:any) => {
  return <SearchBox.Group {...props} />
}

GroupStory.story = {
  name: "Group"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
