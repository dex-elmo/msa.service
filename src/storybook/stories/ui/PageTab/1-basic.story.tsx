import React, { Component } from 'react';
import docs from './docs';

import { PageTab } from '~/lib/ui/index';

export const BasicStory = (props:any) => {
  class BasicStoryComponent extends Component {
    render(){

      return (
        <PageTab>
          <PageTab.Item name="a_menu" text="A">
            <div>
              A Content
            </div>
          </PageTab.Item>
          <PageTab.Item name="b_menu" text="B">
            <div>
              B Content
            </div>
          </PageTab.Item>
        </PageTab>
      );
    }
  }

  return <BasicStoryComponent {...props} />
}

BasicStory.story = {
  name: "basic"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
