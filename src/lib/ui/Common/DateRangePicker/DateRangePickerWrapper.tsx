/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - DateRangePickerWrapper.ts
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import moment from 'moment';
import {
  AnchorDirectionShape,
  DateRangePicker,
  DateRangePickerShape,
  OrientationShape,
  FocusedInputShape,
} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

interface Props {
  startDate: moment.Moment
  endDate: moment.Moment
  onClose?: (
    final: {
      startDate: moment.Moment;
      endDate: moment.Moment;
    },
  ) => void
}

interface State extends DateRangePickerShape {
  startDate: moment.Moment
  endDate: moment.Moment
  focusedInput: FocusedInputShape | null
  direction: AnchorDirectionShape
  dateFormat: string
  small: boolean
  block: boolean
  orientation: OrientationShape
  numMonths: number
  minimumNights: number
}

const DateRangePickerWrapper: React.FC<Props> = (props) => {
  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(
    null,
  );
  const [startDate, setStartDate] = useState<moment.Moment | null>(
    // moment().subtract(30, 'days'),
    props.startDate,
  );
  const [endDate, setEndDate] = useState<moment.Moment | null>(
    props.endDate,
  );
  const [dateFormat, setDateFormat] = useState<string>('MM/DD/YYYY');

  const handleDatesChange: (
    arg: {
      startDate: moment.Moment | null;
      endDate: moment.Moment | null;
    },
  ) => void = ({ startDate: s, endDate: e }:
    { startDate: moment.Moment | null, endDate: moment.Moment | null }) => {
    setStartDate(s);
    setEndDate(e);
  };

  const handleFocusChange:
    (arg: FocusedInputShape | null) => void = (f: FocusedInputShape | null) => {
      setFocusedInput(f);
    };

  return (
    <DateRangePicker
      startDate={ startDate }
      startDateId="unique_start_date_id"
      endDate={ endDate }
      endDateId="unique_end_date_id"
      onDatesChange={ handleDatesChange }
      focusedInput={ focusedInput }
      onFocusChange={ handleFocusChange }
      displayFormat={ dateFormat }
      numberOfMonths={ 2 }
      isOutsideRange={ () => false }
      small
      onClose={ props.onClose }
    />
  );
};

export default DateRangePickerWrapper;
