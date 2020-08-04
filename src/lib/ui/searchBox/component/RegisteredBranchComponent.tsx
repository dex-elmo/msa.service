import React, { SyntheticEvent } from 'react';
import {
  Input, Radio, Select, Table,
} from 'semantic-ui-react';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { SelectOption } from '~/lib';

interface Props {
  propName: string,
}

interface State {
  option: any,
  radioValue: string,
}

class RegisteredBranchComponent extends React.Component<Props> {
  state:State = {
    option: [],
    radioValue: '',
  }

  handleSelect = (e: SyntheticEvent, target: any) => {
    const { value: selectValue } = target;
    SearchStore.searchParams[this.props.propName] = selectValue;
  };

  handleChange = (e:any, { value }:any) => {
    const option = SearchStore.getBranchByType(value);
    this.setState({
      radioValue: value,
      option,
    });
  }

  render() {
    const { propName } = this.props;
    const { option, radioValue } = this.state;

    return (
      <>
        <Table.Cell width={2} active>{propName}</Table.Cell>
        <Table.Cell width={4}>
          <Radio
            label="E/S"
            name="branchGroup"
            value="CES"
            checked={radioValue === 'CES'}
            onChange={this.handleChange}
          />
          <Radio
            label="V/S"
            name="branchGroup"
            value="CVS"
            checked={radioValue === 'CVS'}
            onChange={this.handleChange}
          />

          <Select
            options={ option }
            // placeholder={ config.text.selectPlaceholder }
            onChange={ this.handleSelect }
          />
        </Table.Cell>
      </>
    );
  }
}

export default RegisteredBranchComponent;
