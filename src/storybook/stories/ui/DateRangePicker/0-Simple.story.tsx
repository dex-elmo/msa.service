/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Simple.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component, MouseEvent } from 'react';
import { Button } from 'semantic-ui-react';
import docs from './docs';

import DateRangePicker from '~/lib/ui/DateRagePicker';

export const Simple = (props: any) => {
  class Story extends Component {
    handleEvent = (
      event: MouseEvent,
      picker: ReactBootstrapDaterangepicker.Props,
    ) => {
      console.log(picker.startDate);
    };

    render() {
      return (
        <div>
          <DateRangePicker
            lang="en"
            onEvent={ this.handleEvent }
          >
            <Button
              circular
              color="instagram"
              size="big"
            >
              안녕, 기본달력
            </Button>
          </DateRangePicker>
        </div>
      );
    }
  }

  return <Story { ...props } />;
};

Simple.story = {
  name: 'simple',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};
