import SearchBoxView from './view/SearchBoxView';
import Button from './Button/index';
import Input from './Input/index';
import Radio from './Radio/index';
import Check from './Check/index';
import Select from './Select/index';
import Group from './Group/index';

import 'semantic-ui-css/semantic.min.css';

type SearchBoxType = typeof SearchBoxView & {
  Button: typeof Button;
  Input: typeof Input;
  Radio: typeof Radio;
  Check: typeof Check;
  Select: typeof Select;
  Group: typeof Group;
};

const SearchBox = SearchBoxView as SearchBoxType;
SearchBox.Button = Button;
SearchBox.Input = Input;
SearchBox.Radio = Radio;
SearchBox.Check = Check;
SearchBox.Select = Select;
SearchBox.Group = Group;

export default SearchBox;
