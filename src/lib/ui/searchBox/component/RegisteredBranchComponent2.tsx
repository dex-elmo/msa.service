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
  cesOption: any,
  cvsOption: any,
  disabled: boolean,
}

class RegisteredBranchComponent2 extends React.Component<Props> {
  state:State = {
    cesOption: [],
    cvsOption: [],
    disabled: true,
  }

  componentDidMount() {
    const option = SearchStore.getBranchByType('aa');
    this.setState({
      cesOption: option,
    });
  }

  handleCESSelect = (e: SyntheticEvent, target: any) => {
    const { value: selectValue } = target;
    SearchStore.searchParams[this.props.propName] = selectValue;

    const option = SearchStore.getBranchByType(selectValue);
    this.setState({
      cvsOption: option,
      disabled: false,
    });
  };

  handleCVSSelect = (e: SyntheticEvent, target: any) => {
    const { value: selectValue } = target;
    SearchStore.searchParams[this.props.propName] = selectValue;
  };

  render() {
    const { propName } = this.props;
    const { cesOption, cvsOption, disabled } = this.state;

    return (
      <>
        <Table.Cell width={2} active>{propName}</Table.Cell>
        <Table.Cell width={4}>
          <Select
            options={ cesOption }
            // placeholder={ config.text.selectPlaceholder }
            onChange={ this.handleCESSelect }
          />

          <Select
            options={ cvsOption }
            // placeholder={ config.text.selectPlaceholder }
            onChange={ this.handleCVSSelect }
            disabled={ disabled }
          />
        </Table.Cell>
      </>
    );
  }
}

export default RegisteredBranchComponent2;
