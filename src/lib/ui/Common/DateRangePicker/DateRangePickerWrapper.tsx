/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - DateRangePickerWrapper.ts
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */
import * as React from 'react';
import { Component } from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class DateRangePickerWrapper extends Component<any, any> {
  BLOCKED_DATES = [
    // moment().add(10, 'days'),
    // moment().add(11, 'days'),
    // moment().add(12, 'days'),
  ];

  constructor(props: any) {
    super(props);

    this.state = {
      // focusedInput: null,
      startDate: moment().subtract(30, 'days'),
      endDate: moment(),
      fullscreen: false,
      direction: 'left',
      dateFormat: 'MM/DD/YYYY',
      small: true,
      block: false,
      orientation: 'horizontal',
      numMonths: 2,
      minimumNights: 7,
    };

    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeDateFormat = this.handleChangeDateFormat.bind(this);
  }

  // @ts-ignore
  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  // @ts-ignore
  handleFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // @ts-ignore
  handleChangeFullscreen() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  // @ts-ignore
  handleChangeDirection(e) {
    this.setState({ direction: e.target.value });
  }

  // @ts-ignore
  handleChangeDateFormat(e) {
    this.setState({ dateFormat: e.target.value });
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
        displayFormat={this.state.dateFormat}
        numberOfMonths={this.state.numMonths || 2}
        block={this.state.block}
        small={this.state.small}
        withFullScreenPortal={this.state.fullscreen}
        anchorDirection={this.state.direction}
        orientation={this.state.orientation}
        minimumNights={this.state.minimumNights}
        {...this.props}
      />
    );
  }
}

export default DateRangePickerWrapper;
