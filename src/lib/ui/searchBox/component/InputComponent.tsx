import React from 'react';
import { Input, Table } from 'semantic-ui-react';
import SearchStore from '~/lib/service/search/store/SearchStore';

interface Props {
  propName: string,
}

class InputComponent extends React.Component<Props> {
  handleInput = (e:any) => {
    SearchStore.searchParams[this.props.propName] = e.currentTarget.value;
  }

  render() {
    const { propName } = this.props;

    return (
      <>
        <Table.Cell width={2} active>{propName}</Table.Cell>
        <Table.Cell width={4}>
          <Input onChange={this.handleInput} />
        </Table.Cell>
      </>
    );
  }
}

export default InputComponent;
