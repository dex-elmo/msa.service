/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - UserSearch.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import * as React from 'react';
import {
  Table, Grid, Segment, Input, Select, Dropdown, Button, Container,
} from 'semantic-ui-react';
import { Component } from 'react';

interface DropdownProps {
  key: string,
  value: string,
  text: string,
}

class UserSearch extends Component<any, any> {
  selectOptions: DropdownProps[] = [
    { key: 'default', value: 'default', text: 'All' },
    { key: 'status', value: 'status', text: 'Status' },
    { key: 'rb', value: 'rb', text: 'Registered Branch' },
    { key: 'rd', value: 'rb', text: 'Registered Date' },
  ];

  userStatusOptions: DropdownProps[] = [
    { key: 'default', value: 'default', text: 'All' },
    { key: 'act', value: 'activated', text: 'Activated' },
    { key: 'ter', value: 'terminated', text: 'Terminated' },
    { key: 'cl', value: 'closed', text: 'Closed' },
  ];

  registerBranchOptions: DropdownProps[] = [
    { key: 'default', value: 'default', text: 'All' },
  ];

  selectedRegisterBranchOptions: DropdownProps[] = [];

  render() {
    return (
      <Grid>
        <Grid.Column width={ 14 }>
          <Table size="small" basic compact="very">
            <Table.Body>
              <Table.Row textAlign="left">
                <Table.Cell active>Category</Table.Cell>
                <Table.Cell>
                  <Dropdown selection options={ this.selectOptions } />
                  { ' ' }
                  <Select options={ this.selectOptions } />
                </Table.Cell>
                <Table.Cell active>Status</Table.Cell>
                <Table.Cell>
                  <Select options={ this.userStatusOptions } />
                </Table.Cell>
              </Table.Row>
              <Table.Row textAlign="left" verticalAlign="middle">
                <Table.Cell active>Registered Branch</Table.Cell>
                <Table.Cell>
                  <Select options={ this.registerBranchOptions } />
                  { ' ' }
                  <Select options={ this.selectedRegisterBranchOptions } />
                </Table.Cell>
                <Table.Cell active>Registered Date</Table.Cell>
                <Table.Cell>
                  <Input /> to <Input />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column verticalAlign="bottom">
          <Button> Search </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserSearch;
