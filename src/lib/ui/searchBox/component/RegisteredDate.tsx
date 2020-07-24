import React from 'react';
import { Table } from 'semantic-ui-react';
import moment from 'moment';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { DateRangePicker } from '~/lib/ui/Common/DateRangePicker';

interface Props {
  propName: string,
}

class RegisteredDate extends React.Component<Props> {
  defaultDate = {
    startDate: moment().subtract(7, 'days'),
    endDate: moment(),
  };

  handleDateChange = (
    final: { startDate: moment.Moment, endDate: moment.Moment },
  ) => {
    const startDate = final.startDate.format('YYYYMMDD');
    const endDate = final.startDate.format('YYYYMMDD');
    SearchStore.searchParams[this.props.propName] = { startDate, endDate };
  };

  render() {
    return (
      <>
        <Table.Cell width={2} active>Registered Date</Table.Cell>
        <Table.Cell width={4}>
          <DateRangePicker
            startDate={this.defaultDate.startDate}
            endDate={this.defaultDate.endDate}
            onClose={this.handleDateChange}
          />
        </Table.Cell>
      </>
    );
  }
}

export default RegisteredDate;
