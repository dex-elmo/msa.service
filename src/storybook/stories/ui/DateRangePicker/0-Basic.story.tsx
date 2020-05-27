/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Basic.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */
import React, { Component } from 'react';
import moment from 'moment';
import DateRangePickerWrapper from '~/lib/ui/Common/DateRangePicker/DateRangePickerWrapper';
import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    render() {
      return (
        <div>
          <DateRangePickerWrapper />
        </div>
      );
    }
  }

  return (
    <div>
      <Story { ...props } />
    </div>
  );
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};