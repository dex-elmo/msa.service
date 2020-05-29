/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - UserSearch.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import * as React from 'react';
import { Component, SyntheticEvent } from 'react';
import {
  Table,
  Grid,
  Input,
  Select,
  Dropdown,
  Button,
} from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';
import moment from 'moment';
import UserApi from '~/lib/service/users/api/UserApi';
import { DateRangePicker } from '~/lib/ui/Common/DateRangePicker';

type UserType =
  'CES' | // E/Station
  'CVS' | // V/Station
  'CST' | // Customer  //////////
  'MCT' | // Merchant
  'ADM' | // Admin
  'ECG' | // ECG
  'ESA' | // ES Admin
  'ESO' | // ES OP
  'VSA' | // VS Admin
  'VSO'; // VS OP

interface DropdownProps {
  key: string,
  value: string,
  text: string,
}

interface SelectOptions {
  category: DropdownProps[],
  status: DropdownProps[],
  branch: DropdownProps[],
  registered: DropdownProps[],
}

interface ConfigType {
  style: {
    input: {
      width: string,
    },
    grid: {
      columnWidth?: SemanticWIDTHS,
    }
  },
  text: {
    selectPlaceholder: string,
    estation: string,
    vstation: string,
  }
}

interface State {
  userType?: UserType,
  companyId?: string,
  category?: string,
  isCategorySelect: boolean,
  categoryVal?: string,
  status?: string,
  branchName?: UserType,
  isBranchSelect: boolean,
  branchList: DropdownProps[],
  startDate?: moment.Moment | string,
  endDate?: moment.Moment | string,
}

interface Props {
  apiUrl: string,
  handleButton: any,
}

const config: ConfigType = {
  style: {
    input: {
      width: '177px',
    },
    grid: {
      columnWidth: 14,
    },
  },
  text: {
    selectPlaceholder: '------------- Select -----------',
    estation: '---------- E-Station ----------',
    vstation: '---------- V-Station ----------',
  },
};

class UserSearch extends Component<Props, State> {
  selectOptions: SelectOptions = {
    category: [
      { key: 'all', value: 'all', text: 'All' },
      { key: 'emailAddress', value: 'emailAddress', text: 'E-Mail ID' },
      { key: 'name', value: 'name', text: 'Name' },
      { key: 'phoneNo', value: 'phoneNo', text: 'Mobile Number' },
    ],
    status: [
      { key: 'all', value: 'all', text: 'All' },
      { key: 'actv', value: 'ACTV', text: 'Activated' },
      { key: 'block', value: 'BLOCK', text: 'Blocked' },
      { key: 'term', value: 'TERM', text: 'Terminated' },
      { key: 'close', value: 'CLOSE', text: 'Closed' },
      { key: 'stnby', value: 'STNBY', text: 'Standby' },
    ],
    branch: [
      { key: 'all', value: 'default', text: 'All' },
    ],
    registered: [
      { key: 'all', value: 'CES', text: 'E-Station' },
    ],
  };

  state: State = {
    userType: 'CST',
    isCategorySelect: false,
    isBranchSelect: false,
    branchList: [],
  };

  handleCategory = (e: SyntheticEvent, target: any) => {
    const { value: category } = target;
    this.setState({
      category,
      isCategorySelect: true,
    });
  };

  handleCategoryInput = (e: SyntheticEvent, target: any) => {
    const { value } = target;
    this.setState({
      categoryVal: value,
    });
  };

  handleStatus = (e: SyntheticEvent, target: any) => {
    const { value: status } = target;
    this.setState({
      status,
    });
  };

  handleSelectedBranch = async (e: SyntheticEvent, target: any) => {
    const { branchList } = this.state;
    const { apiUrl } = this.props;
    const { value } = target;
    const resp = await UserApi.getCompanyList(
      apiUrl,
      {
        userType: value,
      },
    );
    if (!resp.error) {
      const { results } = resp;
      this.setState({
        isBranchSelect: true,
        branchList: branchList!.concat(...results),
      });
    }
  };

  handleBranch = (e: SyntheticEvent, target: any) => {
    const { value } = target;
    this.setState({
      companyId: value,
    });
  };

  handleDateChange = (
    final: { startDate: moment.Moment, endDate: moment.Moment },
  ) => {
    const { startDate, endDate } = final;
    this.setState({ startDate, endDate });
    console.log(final);
  };

  handleSearchButton = (e: SyntheticEvent, target: any) => {
    console.log(this.state);
  };

  render() {
    const defaultDate = {
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
    };
    const { ...state } = this.state;
    const { ...props } = this.props;

    return (
      <Grid>
        <Grid.Column width={ config.style.grid.columnWidth }>
          <Table size="small" compact="very">
            <Table.Body>
              <Table.Row textAlign="left">
                <Table.Cell active>Category</Table.Cell>
                <Table.Cell>
                  <Dropdown
                    selection
                    options={ this.selectOptions.category }
                    placeholder={ config.text.selectPlaceholder }
                    onChange={ this.handleCategory }
                  />
                  { ' ' }
                  <Input
                    type="text"
                    disabled={ !state.isCategorySelect }
                    style={ config.style }
                    onChange={ this.handleCategoryInput }
                  />
                </Table.Cell>
                <Table.Cell active>Status</Table.Cell>
                <Table.Cell>
                  <Select
                    options={ this.selectOptions.status }
                    placeholder={ config.text.selectPlaceholder }
                    onChange={ this.handleStatus }
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row textAlign="left" verticalAlign="middle">
                <Table.Cell active>Registered Branch</Table.Cell>
                <Table.Cell>
                  <Select
                    options={ this.selectOptions.registered }
                    placeholder={ config.text.estation }
                    onChange={ this.handleSelectedBranch }
                  />
                  { ' ' }
                  <Select
                    disabled={ !state.isBranchSelect }
                    options={ state.branchList }
                    placeholder={ config.text.vstation }
                    onChange={ this.handleBranch }
                  />
                </Table.Cell>
                <Table.Cell active>Registered Date</Table.Cell>
                <Table.Cell>
                  <DateRangePicker
                    startDate={ defaultDate.startDate }
                    endDate={ defaultDate.endDate }
                    onClose={ this.handleDateChange }
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column verticalAlign="bottom">
          <Button
            { ...props }
            onClick={ () => props.handleButton(state) }
          > Search
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserSearch;
