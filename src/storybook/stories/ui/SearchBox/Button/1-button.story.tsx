import React from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const ButtonStory = (props:any) => {
  return <SearchBox.Button text="Button" {...props} />
}

ButtonStory.story = {
  name: "Button"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
