import React, { FormEvent } from 'react';
import { FormRadio as SemainticFormRadio, FormRadioProps, SemanticShorthandItem, HtmlLabelProps, CheckboxProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchModel from '../../../../model/search/SearchModel';

interface Props extends FormRadioProps {
  propname: string
}

interface SearchRadioProps {
  /** JSON key Value*/
  propname: string,
  /** HTML input type, either checkbox or radio.*/
  type?: "radio" | "checkbox",
  /** Additional classes.*/
  className?: string,
  /** Individual fields may be disabled.*/
  disabled?: boolean,
  /** A field can have its label next to instead of above it.*/
  inline?: boolean,
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>,
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Format to emphasize the current selection state.*/
  slider?: boolean,
  /** Format to show an on or off choice.*/
  toggle?: boolean,
  /** Whether or not checkbox is checked.*/
  checked?: boolean,
  /** Removes padding for a label. Auto applied when there is no label.*/
  fitted?: boolean,
  /** Called when the user attempts to change the checked state.*/
  onChange?: ((event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void),
  /** Format as a radio element. This means it is an exclusive option.*/
  radio?: boolean,
  /** The HTML input value.*/
  value?: string | number
}

interface Data {
  value: string
}

@observer
class RadioView extends React.Component<SearchRadioProps> {
  onChange = (e:FormEvent, data:object) => {
    searchModel.searchParams[this.props.propname] = (data as Data).value;
  }

  render(){
    const { value : propValue } = this.props;

    return(
      <SemainticFormRadio {...this.props} checked={searchModel.searchParams[this.props.propname] === propValue} onChange={this.onChange}/>
    );
  }
}

export default RadioView;
