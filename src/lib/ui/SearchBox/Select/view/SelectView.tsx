import React, { SyntheticEvent } from 'react';
import { FormSelect as SemanticFormSelect, FormSelectProps, DropdownItemProps, SemanticShorthandItem, HtmlLabelProps, DropdownProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/search/store/SearchStore';

interface Props extends FormSelectProps {
  propname: string
}

interface SearchSelectProps {
  /** JSON key Value*/
  propname: string,
  /** Array of Dropdown.Item props e.g. { text: '', value: '' }*/
  options: DropdownItemProps[],
  /** Additional classes.*/
  className?: string,
  /** Individual fields may be disabled.*/
  disabled?: boolean,
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Initial value or value array if multiple.*/
  defaultValue?: string | number | boolean | (string | number | boolean)[],
  /** Called when the user attempts to change the value.*/
  onChange?: ((event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void),
  /** Placeholder text.*/
  placeholder?: string,
  /** Current value or value array if multiple. Creates a controlled component.*/
  value?: string | number | boolean | (string | number | boolean)[]
  /** A dropdown can have its menu scroll.*/
  // scrolling?: boolean,
  /** A dropdown can be formatted so that its menu is pointing.*/
  // pointing?: boolean | "top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right",
}

interface Data {
  value: string
}

@observer
class SelectView extends React.Component<SearchSelectProps> {
  onChange = (e:SyntheticEvent, data:object) => {
    searchStore.searchParams[this.props.propname] = (data as Data).value;
  }

  render(){
    return(
      <SemanticFormSelect {...this.props} onChange={this.onChange}/>
    );
  }
}

export default SelectView;
