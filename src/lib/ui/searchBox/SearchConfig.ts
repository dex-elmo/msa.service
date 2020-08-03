export const SearchConfig = Object.freeze({
  INPUT: {
    E_Mail_ID: 'E-Mail ID',
    BRANCH_NAME: 'Branch name',
    BRANCH_CODE: 'Branch code',
    NAME: 'Name',
    METER_ID: 'Meter ID',
    WALLET_ID: 'Wallet ID',
    DEPOSIT_CODE: 'Deposit code',
  },
  SELECT: {
    TRANSACTION_HISTORY: {
      VALUE: 'TRANSACTION_HISTORY',
      HEADER: 'Category',
    },
    STATION_STATUS: {
      VALUE: 'STATION_STATUS',
      HEADER: 'Status',
    },
    OPERATION_HISTORY: {
      VALUE: 'OPERATION_HISTORY',
      HEADER: 'Category',
    },
    MEMBER_STATUS: {
      VALUE: 'MEMBER_STATUS',
      HEADER: 'Status',
    },
    WALLET_HISTORY: {
      VALUE: 'WALLET_HISTORY',
      HEADER: 'Category',
    },
    RECHARGING_METHOD: {
      VALUE: 'RECHARGING_METHOD',
      HEADER: 'RECHARGING_METHOD',
    },
  },
  // STATUS: 'STATUS',
  REGISTERED_DATE: 'REGISTERED_DATE',
});

export interface DropdownProps {
  key: string,
  value: string,
  text: string,
}

export interface SelectOptions {
  // category: DropdownProps[],
  transactionHistory: DropdownProps[],
  stationStatus: DropdownProps[],
  operationHistory: DropdownProps[],
  memberStatus: DropdownProps[],
  walletHistory: DropdownProps[],
  rechargingMethod: DropdownProps[],
}

export const SelectOption: SelectOptions = {
  // category: [
  //   { key: 'all', value: 'all', text: 'All' },
  //   { key: 'emailAddress', value: 'emailAddress', text: 'E-Mail ID' },
  //   { key: 'name', value: 'name', text: 'Name' },
  //   { key: 'phoneNo', value: 'phoneNo', text: 'Mobile Number' },
  // ],
  transactionHistory: [
    { key: 'BUY', value: 'BUY', text: 'BUY' },
    { key: 'SEND', value: 'SEND', text: 'SEND' },
    { key: 'RECEIVE', value: 'RECEIVE', text: 'RECEIVE' },
    { key: 'WITHDRAW', value: 'WITHDRAW', text: 'WITHDRAW' },
    { key: 'RECHARGE', value: 'RECHARGE', text: 'RECHARGE' },
  ],
  stationStatus: [
    { key: 'NORMAL', value: 'NORMAL', text: 'NORMAL' },
    { key: 'ABNORMAL', value: 'ABNORMAL', text: 'ABNORMAL' },
  ],
  operationHistory: [
    { key: 'REGISTER', value: 'REGISTER', text: 'REGISTER' },
    { key: 'MODIFY', value: 'MODIFY', text: 'MODIFY' },
  ],
  memberStatus: [
    { key: 'ACTIVATED', value: 'ACTIVATED', text: 'ACTIVATED' },
    { key: 'BLOCKED', value: 'BLOCKED', text: 'BLOCKED' },
    { key: 'TERMINATED', value: 'TERMINATED', text: 'TERMINATED' },
    { key: 'CLOSED', value: 'CLOSED', text: 'CLOSED' },
  ],
  walletHistory: [
    { key: 'ALL', value: 'ALL', text: 'ALL' },
    { key: 'SELL', value: 'SELL', text: 'SELL' },
    { key: 'WITHDRAW', value: 'WITHDRAW', text: 'WITHDRAW' },
  ],
  rechargingMethod: [
    { key: 'TOKEN', value: 'TOKEN', text: 'TOKEN' },
    { key: 'CASH', value: 'CASH', text: 'CASH' },
    { key: 'MOBILE_MONEY', value: 'MOBILE_MONEY', text: 'MOBILE_MONEY' },
    { key: 'CREDIT_CARD', value: 'CREDIT_CARD', text: 'CREDIT_CARD' },
  ],
};

//export default SearchConfig;
