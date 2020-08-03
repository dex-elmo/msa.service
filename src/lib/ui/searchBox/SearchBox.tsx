import React from 'react';
import {
  Button, Form, Grid, Table,
} from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import SearchStore from '~/lib/service/search/store/SearchStore';
import {
  InputComponent, SearchConfig, SelectComponent, SelectOption,
} from '~/lib';
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
      // case SearchConfig.STATUS:
      //   return <Status propName="status" />;
      case SearchConfig.REGISTERED_DATE:
        return <RegisteredDate propName="reg_dt" />;
      case SearchConfig.INPUT.E_Mail_ID:
        return <InputComponent propName={SearchConfig.INPUT.E_Mail_ID} />;
      case SearchConfig.INPUT.BRANCH_NAME:
        return <InputComponent propName={SearchConfig.INPUT.BRANCH_NAME} />;
      case SearchConfig.INPUT.BRANCH_CODE:
        return <InputComponent propName={SearchConfig.INPUT.BRANCH_CODE} />;
      case SearchConfig.INPUT.NAME:
        return <InputComponent propName={SearchConfig.INPUT.NAME} />;
      case SearchConfig.INPUT.METER_ID:
        return <InputComponent propName={SearchConfig.INPUT.METER_ID} />;
      case SearchConfig.INPUT.WALLET_ID:
        return <InputComponent propName={SearchConfig.INPUT.WALLET_ID} />;
      case SearchConfig.INPUT.DEPOSIT_CODE:
        return <InputComponent propName={SearchConfig.INPUT.DEPOSIT_CODE} />;
      case SearchConfig.SELECT.TRANSACTION_HISTORY.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.TRANSACTION_HISTORY.HEADER} option={SelectOption.transactionHistory} />;
      case SearchConfig.SELECT.STATION_STATUS.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.STATION_STATUS.HEADER} option={SelectOption.stationStatus} />;
      case SearchConfig.SELECT.OPERATION_HISTORY.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.OPERATION_HISTORY.HEADER} option={SelectOption.operationHistory} />;
      case SearchConfig.SELECT.MEMBER_STATUS.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.MEMBER_STATUS.HEADER} option={SelectOption.memberStatus} />;
      case SearchConfig.SELECT.WALLET_HISTORY.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.WALLET_HISTORY.HEADER} option={SelectOption.walletHistory} />;
      case SearchConfig.SELECT.RECHARGING_METHOD.VALUE:
        return <SelectComponent propName={SearchConfig.SELECT.RECHARGING_METHOD.HEADER} option={SelectOption.rechargingMethod} />;
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
                  {arr[1] !== '' ? this.searchComponent(arr[1]) : ''}
                </Table.Row>
                <Table.Row>
                  {arr[2] !== '' ? this.searchComponent(arr[2]) : ''}
                  {arr[3] !== '' ? this.searchComponent(arr[3]) : ''}
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
