import React, { Component } from 'react';
import docs from './docs';

import { PageTab } from '~/lib/ui/index';

export const ItemStory = (props:any) => {
  class BasicStoryComponent extends Component {
    render(){

      return (
        <PageTab>
          <PageTab.Item name="" text=""/>
        </PageTab>
      );
    }
  }

  return <BasicStoryComponent {...props} />
}

ItemStory.story = {
  name: "item"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
