import React, { SyntheticEvent } from 'react';
import { Input, Select, Table } from 'semantic-ui-react';
import SearchStore from '~/lib/service/search/store/SearchStore';

interface Props {
  propName: string,
  option: any,
}

class SelectComponent extends React.Component<Props> {
  handleStatus = (e: SyntheticEvent, target: any) => {
    const { value: status } = target;
    SearchStore.searchParams[this.props.propName] = status;
  };

  render() {
    const { propName, option } = this.props;

    return (
      <>
        <Table.Cell width={2} active>{propName}</Table.Cell>
        <Table.Cell width={4}>
          <Select
            options={ option }
            // placeholder={ config.text.selectPlaceholder }
            onChange={ this.handleStatus }
          />
        </Table.Cell>
      </>
    );
  }
}

export default SelectComponent;
