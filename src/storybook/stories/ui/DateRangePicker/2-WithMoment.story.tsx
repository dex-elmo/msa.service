/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 2-WithMoment.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import moment, { Moment } from 'moment';
import docs from './docs';

import DateRangePicker from '~/lib/ui/DateRagePicker';

export const WithMoment = (props: any) => {
  const startDate: Moment = moment().subtract(20, 'days');
  const endDate: Moment = moment();

  class Story extends Component {
    render() {
      return (
        <div>
          <DateRangePicker
            lang="en"
            startDate={ startDate }
            endDate={ endDate }
          >
            <Button circular color="instagram" size="big">
              안녕, 기본달력
            </Button>
          </DateRangePicker>
        </div>
      );
    }
  }

  return <Story { ...props } />;
};

WithMoment.story = {
  name: 'with date as moment()',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};
