import React, { SyntheticEvent, MouseEvent } from 'react';
import { FormCheckbox as SemanticFormCheckBox, FormCheckboxProps, SemanticShorthandItem, CheckboxProps, HtmlLabelProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/store/search/SearchStore';

interface Props extends FormCheckboxProps{
  propname: string
}

interface SearchCheckProps {
  /** JSON key Value*/
  propname: string
  /** HTML input type, either checkbox or radio.*/
  type?: "radio" | "checkbox",
  /** Additional classes.*/
  className?: string,
  /** Individual fields may be disabled.*/
  disabled?: boolean,
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Whether or not checkbox is checked.*/
  checked?: boolean,
  /** Called when the checkbox or label is clicked.*/
  onClick?: ((event: MouseEvent<HTMLInputElement, MouseEvent>, data: CheckboxProps) => void),
  /** The HTML input value.*/
  value?: string | number
  /** Format to emphasize the current selection state.*/
  // slider?: boolean,
  /** Format as a radio element. This means it is an exclusive option.*/
  // radio?: boolean,
}

interface Data {
  checked: boolean
}

@observer
class CheckView extends React.Component<SearchCheckProps> {
  onClick = (e:SyntheticEvent, data:object) => {
    searchStore.searchParams[this.props.propname] = (data as Data).checked;
  }

  render(){
    return(
      <SemanticFormCheckBox {...this.props} onClick={this.onClick}/>
    );
  }
}

export default CheckView;
