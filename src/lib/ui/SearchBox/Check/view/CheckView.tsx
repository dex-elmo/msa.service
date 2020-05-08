import React, { SyntheticEvent, ReactNode, MouseEvent } from 'react';
import { FormCheckbox as SemanticFormCheckBox, FormCheckboxProps, SemanticShorthandItem, CheckboxProps, HtmlLabelProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchModel from '../../../../model/search/SearchModel';

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
  /** A field can have its label next to instead of above it.*/
  inline?: boolean,
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Whether or not checkbox is checked.*/
  checked?: boolean,
  /** Removes padding for a label. Auto applied when there is no label.*/
  fitted?: boolean,
  /** Called when the checkbox or label is clicked.*/
  onClick?: ((event: MouseEvent<HTMLInputElement, MouseEvent>, data: CheckboxProps) => void),
  /** Format as a radio element. This means it is an exclusive option.*/
  radio?: boolean,
  /** Format to emphasize the current selection state.*/
  slider?: boolean,
  /** The HTML input value.*/
  value?: string | number
}

interface Data {
  checked: boolean
}

@observer
class CheckView extends React.Component<SearchCheckProps> {
  onClick = (e:SyntheticEvent, data:object) => {
    searchModel.searchParams[this.props.propname] = (data as Data).checked;
  }

  render(){
    return(
      <SemanticFormCheckBox {...this.props} onClick={this.onClick}/>
    );
  }
}

export default CheckView;
