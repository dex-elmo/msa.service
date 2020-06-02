import React from 'react';
import { Select } from 'semantic-ui-react';
import moment from 'moment';
import autobind from '~/lib/ui/module/autobindDecorator';

interface Props {
  handleBirth:any,
  defaultBirth?:string | undefined,
}

interface State {
  yearList: { key: number, value: number, text: React.ReactText }[],
  monthList: { key: number, value: number, text: React.ReactText }[],
  dayList: { key: number, value: number, text: React.ReactText }[],
  year: string | undefined,
  month: string | undefined,
  day: string | undefined,
  birth: string,
}

@autobind
class SharedBirthOfDate extends React.Component<Props, State> {
  constructor(props:any) {
    super(props);

    const year = moment().year();
    const month = moment().month() + 1;
    const day = moment().date();

    const month1 = month < 10 ? `0${month.toString()}` : month.toString();
    const day1 = day < 10 ? `0${day.toString()}` : day.toString();

    this.state = {
      yearList: [],
      monthList: [],
      dayList: [],
      year: year.toString(),
      month: month1,
      day: day1.toString(),
      birth: `${year}${month1}${day}`,
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

    this.props.handleBirth(this.state.birth);
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    if (prevProps.defaultBirth !== this.props.defaultBirth) {
      const { defaultBirth } = this.props;
      const year = defaultBirth?.substr(0, 4);
      const month = defaultBirth?.substr(5, 2);
      const day = defaultBirth?.substr(8, 2);

      this.setState({
        year,
        month,
        day,
      });

      this.getDayList(year, month);
    }
  }

  changeYear = (e:any, value:any) => {
    const year = value.value.toString();

    const dayRange = this.getDayList(year, this.state.month);
    const { day } = this.state;

    if (typeof day !== 'undefined') {
      this.setState({
        year,
        day: dayRange < day ? '01' : day,
      });

      const day1 = dayRange < day ? '01' : day;
      this.props.handleBirth(`${year}${this.state.month}${day1}`);
    }
  }

  changeMonth = (e:any, value:any) => {
    const month = value.value.toString();

    const dayRange = this.getDayList(this.state.year, month);
    const { day } = this.state;

    if (typeof day !== 'undefined') {
      this.setState({
        month: month < 10 ? `0${month.toString()}` : month.toString(),
        day: dayRange < day ? '01' : day,
      });

      const month1 = month < 10 ? `0${month.toString()}` : month.toString();
      const day1 = dayRange < day ? '01' : day;
      this.props.handleBirth(`${this.state.year}${month1}${day1}`);
    }
  }

  changeDay= (e:any, value:any) => {
    const day = value.value.toString();

    this.setState({
      day: day < 10 ? `0${day.toString()}` : day.toString(),
    });

    const day1 = day < 10 ? `0${day.toString()}` : day.toString();
    this.props.handleBirth(`${this.state.year}${this.state.month}${day1}`);
  }

  getDayList = (year:string | undefined, month:string | undefined) => {
    if (typeof year !== 'undefined') {
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
    return true;
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
