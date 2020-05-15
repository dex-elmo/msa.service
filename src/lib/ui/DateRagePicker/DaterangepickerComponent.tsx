/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - DaterangepickerComponent.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import './daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css'
import moment, { Moment } from 'moment';

type DateOrString = string | moment.Moment | Date;

interface NuriDateRangePickerProps
  extends ReactBootstrapDaterangepicker.Props {
  /** DateRangePicker 국제화 */
  lang: 'ko' | 'en',
}

class DaterangepickerComponent
  extends Component<NuriDateRangePickerProps> {

  static defaultProps = {
    locale: {
      format: 'YYYY-MM-DD'
    }
  }

  render() {
    const {
      lang = 'en',
      ...otherProps
    } = this.props;

    switch (lang) {
      case 'ko':
        otherProps.locale = {
          ...otherProps.locale,
          separator: ' ~ ',
          applyLabel: '확인',
          cancelLabel: '취소',
          daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
          monthNames:
            [
              '1월', '2월', '3월', '4월', '5월', '6월',
              '7월', '8월', '9월', '10월', '11월', '12월',
            ]
        }
        break;
      default: // case 'en':
        otherProps.locale = {
          format: 'MM-DD-YYYY',
          separator: " ~ ",
        }
        break;
    }

    return (
      <DateRangePicker { ...otherProps }>
        { this.props.children }
      </DateRangePicker>
    );
  }

}

export default DaterangepickerComponent;
