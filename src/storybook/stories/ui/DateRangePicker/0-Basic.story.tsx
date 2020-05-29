/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Basic.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */
import React, { Component } from 'react';
import moment from 'moment';
import {
  Input, Label, Menu, Table, Icon,
} from 'semantic-ui-react';
import DateRangePickerWrapper
  from '~/lib/ui/Common/DateRangePicker/DateRangePickerWrapper';
import 'react-dates/lib/css/_datepicker.css';
import docs from './docs';

export const Basic = (props: any) => {
  class Story extends Component {
    onClose: (
      final: {
        startDate: moment.Moment;
        endDate: moment.Moment;
      },
    ) => void = (final) => {
      console.log(final);
    };

    render() {
      const startDate = moment().subtract(2, 'days');
      const endDate = moment();

      return (
        <div>

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>First</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <DateRangePickerWrapper
                    startDate={ startDate }
                    endDate={ endDate }
                    onClose={ this.onClose }
                  />
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>


          <div>
            <DateRangePickerWrapper
              startDate={ startDate }
              endDate={ endDate }
              onClose={ this.onClose }
            />

          </div>

        </div>
      );
    }
  }

  return (
    <div>
      <Story { ...props } />
    </div>
  );
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|DateRangePicker',
  component: docs.component,
  parameters: { ...docs.parameters },
};
