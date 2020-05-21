import React from 'react';
import { Select } from 'semantic-ui-react';
import moment from 'moment';
import autobind from '~/lib/ui/module/autobindDecorator';

interface State {
  yearList: { key: number, value: number, text: React.ReactText }[],
  monthList: { key: number, value: number, text: React.ReactText }[],
  dayList: { key: number, value: number, text: React.ReactText }[],
  year: string,
  month: string,
  day: string,
}

@autobind
class SharedBirthOfDate extends React.Component<any, State> {
  constructor(props:any) {
    super(props);

    const year = moment().year();
    const month = moment().month() + 1;
    const day = moment().date();

    this.state = {
      yearList: [],
      monthList: [],
      dayList: [],
      year: year.toString(),
      month: month < 10 ? `0${month.toString()}` : month.toString(),
      day: day.toString(),
    };
  }

  componentDidMount() {
    const yearList = [];
    const monthList = [];

    for (let i = 2020; i >= 1920; i--) {
      yearList.push({ key: i, value: i, text: i < 10 ? `0${i}` : i });
    }

    for (let i = 1; i <= 12; i++) {
      monthList.push({ key: i, value: i, text: i < 10 ? `0${i}` : i });
    }

    this.getDayList(this.state.year, this.state.month);

    this.setState({
      yearList,
      monthList,
    });
  }

  changeYear = (e:any, value:any) => {
    const year = value.value.toString();

    const dayRange = this.getDayList(year, this.state.month);
    const { day } = this.state;

    this.setState({
      year,
      day: dayRange < day ? '01' : day,
    });
  }

  changeMonth = (e:any, value:any) => {
    const month = value.value.toString();

    const dayRange = this.getDayList(this.state.year, month);
    const { day } = this.state;

    this.setState({
      month: month < 10 ? `0${month.toString()}` : month.toString(),
      day: dayRange < day ? '01' : day,
    });
  }

  changeDay= (e:any, value:any) => {
    const day = value.value.toString();

    this.setState({
      day: day < 10 ? `0${day.toString()}` : day.toString(),
    });
  }

  getDayList = (year:string, month:string) => {
    const dayList = [];
    const dayRange = moment(year + month, 'YYYYMM').daysInMonth();

    for (let i = 1; i <= dayRange; i++) {
      dayList.push({ key: i, value: i, text: i < 10 ? `0${i}` : i });
    }

    this.setState({
      dayList,
    });

    return dayRange.toString();
  }

  render() {
    return (
      <>
        <Select
          text={this.state.year}
          options={this.state.yearList }
          onChange={this.changeYear}
        />
        <Select
          text={this.state.month}
          options={this.state.monthList }
          onChange={this.changeMonth}
        />
        <Select
          text={this.state.day}
          options={this.state.dayList}
          onChange={this.changeDay}
        />
      </>
    );
  }
}

export default SharedBirthOfDate;
