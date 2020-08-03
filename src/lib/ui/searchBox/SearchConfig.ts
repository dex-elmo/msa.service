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
  STATUS: 'STATUS',
  REGISTERED_DATE: 'REGISTERED_DATE',
});

interface DropdownProps {
  key: string,
  value: string,
  text: string,
}

interface SelectOptions {
  category: DropdownProps[],
}

export const SelectOption: SelectOptions = {
  category: [
    { key: 'all', value: 'all', text: 'All' },
    { key: 'emailAddress', value: 'emailAddress', text: 'E-Mail ID' },
    { key: 'name', value: 'name', text: 'Name' },
    { key: 'phoneNo', value: 'phoneNo', text: 'Mobile Number' },
  ],
};

//export default SearchConfig;
