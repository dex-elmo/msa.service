import React from 'react';
import {
  Button, Form, Grid, Input, Table,
} from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { Email, SearchConfig } from '~/lib';
import Status from '~/lib/ui/searchBox/component/Status';
import RegisteredDate from '~/lib/ui/searchBox/component/RegisteredDate';

interface Props {
  arr: Array<string>,
  onSubmit:any,
}

interface ConfigType {
  style: {
    grid: {
      columnWidth?: SemanticWIDTHS,
    }
  }
}

const config: ConfigType = {
  style: {
    grid: {
      columnWidth: 14,
    },
  },
};

/**
 *  기본 2 * 2 Table 검색박스입니다.
 */
@observer
class SearchBox extends React.Component<Props, any> {
  static defaultProps = {
  }

  componentDidMount() {
    SearchStore.setSearchParamNull();
  }

  onSubmit = () => {
    this.props.onSubmit(toJS(SearchStore.searchParams));
  }

  searchComponent = (param:string) => {
    console.log(param);
    switch (param) {
      case SearchConfig.EMAIL_INPUT:
        return <Email propName="email" />;
      case SearchConfig.STATUS:
        return <Status propName="status" />;
      case SearchConfig.REGISTERED_DATE:
        return <RegisteredDate propName="reg_dt" />;
      default:
        return '';
    }
  };

  render() {
    const { arr } = this.props;

    return (
      <Grid>
        <Grid.Column width={config.style.grid.columnWidth}>
          <Form>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  {arr[0] !== '' ? this.searchComponent(arr[0]) : ''}
                  {arr[0] !== '' ? this.searchComponent(arr[1]) : ''}
                </Table.Row>
                <Table.Row>
                  {arr[2] !== '' ? this.searchComponent(arr[2]) : ''}
                  {arr[2] !== '' ? this.searchComponent(arr[3]) : ''}
                </Table.Row>
              </Table.Body>
            </Table>
          </Form>
        </Grid.Column>
        <Grid.Column verticalAlign="bottom">
          <Button onClick={this.onSubmit}>Search</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchBox;
