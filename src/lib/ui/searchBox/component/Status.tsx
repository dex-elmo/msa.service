import React, { SyntheticEvent } from 'react';
import { Input, Select, Table } from 'semantic-ui-react';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { SelectOption } from '~/lib';

interface Props {
  propName: string,
}

class Status extends React.Component<Props> {
  handleStatus = (e: SyntheticEvent, target: any) => {
    const { value: status } = target;
    SearchStore.searchParams[this.props.propName] = status;
  };

  render() {
    return (
      <>
        <Table.Cell width={2} active>Status</Table.Cell>
        <Table.Cell width={4}>
          <Select
            options={ SelectOption.category }
            // placeholder={ config.text.selectPlaceholder }
            onChange={ this.handleStatus }
          />
        </Table.Cell>
      </>
    );
  }
}

export default Status;
