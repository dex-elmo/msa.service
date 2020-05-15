/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - DaterangepickerComponent.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import './daterangepicker.css';

interface NuriDateRangePickerProps
  extends ReactBootstrapDaterangepicker.Props {
  /** DateRangePicker 국제화 */
  lang: 'ko' | 'en',
}

class DaterangepickerComponent
  extends Component<NuriDateRangePickerProps> {
  static defaultProps = {
    locale: {
      format: 'YYYY-MM-DD',
    },
    buttonClasses: ['ui mini button'],
    applyClass: 'primary',
    cancelClass: 'basic',
  };

  render() {
    const {
      lang = 'en',
      children,
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
            ],
        };
        break;
      default: // case 'en':
        otherProps.locale = {
          format: 'MM-DD-YYYY',
          separator: ' ~ ',
        };
        break;
    }

    return (
      <DateRangePicker { ...otherProps }>
        { children }
      </DateRangePicker>
    );
  }
}

export default DaterangepickerComponent;
