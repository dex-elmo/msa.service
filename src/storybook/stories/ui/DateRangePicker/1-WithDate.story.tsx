/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 1-WithDate.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import docs from './docs';

import DateRangePicker from '~/lib/ui/DateRagePicker';

const startDate = '2020-05-13';
const endDate = '2020-05-15';

export const WithDate = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <DateRangePicker
            lang="ko"
            startDate={ startDate }
            endDate={ endDate }
          >
            <Button circular color="youtube">
              안녕, 한국달력
            </Button>
          </DateRangePicker>
        </div>
      );
    }
  }

  return <Story { ...props } />;
};

WithDate.story = {
  name: 'with start & end date',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};
