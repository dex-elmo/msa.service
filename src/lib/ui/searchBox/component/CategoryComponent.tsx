import React, { SyntheticEvent } from 'react';
import { Input, Select, Table } from 'semantic-ui-react';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { SelectOption } from '~/lib';

interface Props {
  propName: string,
  option: any,
}

interface State {
  selectValue: string,
}

class CategoryComponent extends React.Component<Props> {
  state:State = {
    selectValue: '',
  }

  handleInput = (e:any) => {
    const { selectValue } = this.state;
    const inputVal = e.currentTarget.value;
    const obj : {[key:string]:string} = {};
    obj[selectValue] = inputVal;
    SearchStore.searchParams[this.props.propName] = obj;
  }

  handleSelect = (e: SyntheticEvent, target: any) => {
    const { value: selectValue } = target;
    this.setState({ selectValue });
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
            onChange={ this.handleSelect }
          />
          <Input onChange={this.handleInput} />
        </Table.Cell>
      </>
    );
  }
}

export default CategoryComponent;
