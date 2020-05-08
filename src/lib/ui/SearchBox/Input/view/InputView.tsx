import React, { ChangeEvent, ReactNode } from 'react';
import { FormInput as SemanticFormInput, FormInputProps, LabelProps, InputOnChangeData, SemanticShorthandItem } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchModel from '../../../../model/search/SearchModel';

// enum SearchBoxType {
//   Multiple = 'Multiple',
// }

// <SearchBox
//   position="left"
//   type={SearchBoxType.Multiple}
// />

interface Props extends FormInputProps {
  propname: string
}

interface SearchInputProps {
  /** JSON key Value*/
  propname: string,
  /** Shorthand for a Label.*/
  label?: SemanticShorthandItem<LabelProps>,
  /** Additional classes.*/
  className?: string,
  /** Individual fields may be disabled.*/
  disabled?: boolean,
  /** A field can have its label next to instead of above it.*/
  inline?: boolean,
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Passed to the control component*/
  type?: string,
  /** An Input can be formatted to alert the user to an action they may perform.*/
  action?: any,
  /** An action can appear along side an Input on the left or right.*/
  actionPosition?: "left",
  /** An Input field can show a user is currently interacting with it.*/
  focus?: boolean,
  /** Optional Icon to display inside the Input.*/
  icon?: any,
  /** An Icon can appear inside an Input on the left.*/
  iconPositon?: "left"
  /** A Label can appear outside an Input on the left or right.*/
  labelPosition?: "left" | "right" | "left corner" | "right corner",
  /** Called on change.*/
  onChange?: ((event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void)
  /** An Input can vary in size.*/
  size?: "mini" | "small" | "large" | "big" | "huge" | "massive",
}

interface Data {
  value: string
}

@observer
class InputView extends React.Component<SearchInputProps> {
  onChange = (e:ChangeEvent, data:Data) => {
    searchModel.searchParams[this.props.propname] = data.value;
  }

  render(){
    return(
      <SemanticFormInput {...this.props} onChange={this.onChange}/>
    );
  }
}

export default InputView;
