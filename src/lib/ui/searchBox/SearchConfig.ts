export const SearchConfig = Object.freeze({
  EMAIL_INPUT: 'EMAIL_INPUT',
  STATUS: 'STATUS',
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
