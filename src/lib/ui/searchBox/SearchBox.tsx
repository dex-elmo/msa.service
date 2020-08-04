import React from 'react';
import {
  Button, Form, Grid, Table,
} from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import moment from 'moment';
import SearchStore from '~/lib/service/search/store/SearchStore';
import {
  CategoryComponent,
  InputComponent, SearchConfig, SelectComponent, SelectOption,
} from '~/lib';
import Status from '~/lib/ui/searchBox/component/Status';
import RegisteredDate from '~/lib/ui/searchBox/component/RegisteredDate';

interface Props {
  searchArr: Array<string>,
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

    // Date 오늘날짜로 초기화
    const startDate = moment().subtract(7, 'days').format('YYYYMMDD');
    const endDate = moment().format('YYYYMMDD');
    SearchStore.searchParams.reg_dt = { startDate, endDate };
  }

  onSubmit = () => {
    this.props.onSubmit(toJS(SearchStore.searchParams));
  }

  searchComponent = (param:string) => {
    console.log(param);
    switch (param) {
      // case SearchConfig.STATUS:
      //   return <Status propName="status" />;
      // Input
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
      // Select
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
      // Category
      case SearchConfig.CATEGORY.BRANCH.VALUE:
        return <CategoryComponent propName={SearchConfig.CATEGORY.BRANCH.HEADER} option={SelectOption.categoryBranch} />;
      case SearchConfig.CATEGORY.MEMBER.VALUE:
        return <CategoryComponent propName={SearchConfig.CATEGORY.MEMBER.HEADER} option={SelectOption.categoryMember} />;
      case SearchConfig.CATEGORY.WALLET.VALUE:
        return <CategoryComponent propName={SearchConfig.CATEGORY.WALLET.HEADER} option={SelectOption.categoryWallet} />;
      // Registered Date
      case SearchConfig.REGISTERED_DATE:
        return <RegisteredDate propName={SearchConfig.REGISTERED_DATE} />;
      default:
        return '';
    }
  };

  render() {
    const { searchArr } = this.props;

    return (
      <Grid>
        <Grid.Column width={config.style.grid.columnWidth}>
          <Form>
            <Table celled>
              <Table.Body>
                <Table.Row>
                  {searchArr[0] !== '' ? this.searchComponent(searchArr[0]) : ''}
                  {searchArr[1] !== '' ? this.searchComponent(searchArr[1]) : ''}
                </Table.Row>
                <Table.Row>
                  {searchArr[2] !== '' ? this.searchComponent(searchArr[2]) : ''}
                  {searchArr[3] !== '' ? this.searchComponent(searchArr[3]) : ''}
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
