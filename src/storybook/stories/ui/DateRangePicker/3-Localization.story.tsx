/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 3-Localization.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component, MouseEvent } from 'react';
import { Button } from 'semantic-ui-react';
import docs from './docs';

import DateRangePicker from '~/lib/ui/DateRagePicker';

export const Local = (props: any) => {
  class Story extends Component {
    handleEvent = (
      event: MouseEvent,
      picker: ReactBootstrapDaterangepicker.Props,
    ) => {
      console.log(picker.startDate);
    };

    render() {
      const koreanPicker = (
        <DateRangePicker
          lang="ko"
          onEvent={ this.handleEvent }
        >
          <Button
            circular
            color="instagram"
            size="big"
          >
            안녕, 한국달력
          </Button>
        </DateRangePicker>
      );
      const defaultPicker = (
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
      );

      return (
        <div>
          <span>{ koreanPicker }</span>
          <span>{ defaultPicker }</span>
        </div>
      );
    }
  }

  return <Story { ...props } />;
};

Local.story = {
  name: 'localization',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};
