import React, { FormEvent } from 'react';
import { FormRadio as SemainticFormRadio, FormRadioProps, SemanticShorthandItem, HtmlLabelProps, CheckboxProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/search/store/SearchStore';

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
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>,
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Whether or not checkbox is checked.*/
  checked?: boolean,
  /** Called when the user attempts to change the checked state.*/
  onChange?: ((event: FormEvent<HTMLInputElement>, data: CheckboxProps) => void),
  /** The HTML input value.*/
  value?: string | number
  /** Format to show an on or off choice.*/
  // toggle?: boolean,
  /** Format to emphasize the current selection state.*/
  // slider?: boolean,
  /** Format as a radio element. This means it is an exclusive option.*/
  // radio?: boolean,
}

interface Data {
  value: string
}

@observer
class RadioView extends React.Component<SearchRadioProps> {
  onChange = (e:FormEvent, data:object) => {
    searchStore.searchParams[this.props.propname] = (data as Data).value;
  }

  render(){
    const { value : propValue } = this.props;

    return(
      <SemainticFormRadio {...this.props} checked={searchStore.searchParams[this.props.propname] === propValue} onChange={this.onChange}/>
    );
  }
}

export default RadioView;
