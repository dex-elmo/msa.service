import React, { ChangeEvent } from 'react';
import { FormInput as SemanticFormInput, FormInputProps, LabelProps, InputOnChangeData, SemanticShorthandItem } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/search/store/SearchStore';

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
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Passed to the control component*/
  type?: string,
  /** A Label can appear outside an Input on the left or right.*/
  labelPosition?: "left" | "right" | "left corner" | "right corner",
  /** Called on change.*/
  onChange?: ((event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void)
  /** An Input can vary in size.*/
  size?: "mini" | "small" | "large" | "big" | "huge" | "massive"
}

interface Data {
  value: string
}

@observer
class InputView extends React.Component<SearchInputProps> {
  onChange = (e:ChangeEvent, data:Data) => {
    searchStore.searchParams[this.props.propname] = data.value;
  }

  render(){
    return(
      <SemanticFormInput {...this.props} onChange={this.onChange}/>
    );
  }
}

export default InputView;
