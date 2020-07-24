import React from 'react';
import {
  Button, Form, Grid, Input, Table,
} from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import SearchStore from '~/lib/service/search/store/SearchStore';
import { EmailInput, SearchConfig } from '~/lib';
import Status from '~/lib/ui/searchBox/component/Status';

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

@observer
class SearchBox extends React.Component<Props, any> {
  static defaultProps = {
  }

  componentDidMount() {
    SearchStore.setSearchParamNull();
  }

  onSubmit = () => {
    // console.log(SearchStore.searchParams.email);
    this.props.onSubmit(toJS(SearchStore.searchParams));
  }

  aaa = (param:string) => {
    console.log(param);
    switch (param) {
      case SearchConfig.EMAIL_INPUT:
        return <EmailInput propName="email" />;
      case SearchConfig.STATUS:
        return <Status propName="status" />;
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
                  {arr[0] !== '' ? this.aaa(arr[0]) : ''}
                  {arr[1] !== '' ? <EmailInput propName="email" /> : ''}
                  {/*<EmailInput />*/}
                  {/*<EmailInput />*/}
                </Table.Row>
                <Table.Row>
                  {arr[2] !== '' ? this.aaa(arr[2]) : ''}
                  {arr[3] !== '' ? <EmailInput propName="email" /> : ''}
                  {/*<EmailInput />*/}
                  {/*<EmailInput />*/}
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
