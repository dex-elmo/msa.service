import React, { SyntheticEvent, ReactNode, KeyboardEvent, MouseEvent } from 'react';
import { FormSelect as SemanticFormSelect, FormSelectProps, DropdownItemProps, SemanticShorthandItem, HtmlLabelProps, DropdownProps, LabelProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/store/search/SearchStore';

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
  /** A field can have its label next to instead of above it.*/
  inline?: boolean,
  /** Mutually exclusive with children.*/
  label?: SemanticShorthandItem<HtmlLabelProps>
  /** A field can show that input is mandatory. Requires a label.*/
  required?: any,
  /** Passed to the control component*/
  type?: string,
  /** Label prefixed to an option added by a user.*/
  additionLabel?: ReactNode,
  /** Position of the Add: ... option in the dropdown list ('top' or 'bottom').*/
  additionPosition?: "top" | "bottom",
  /** Allow user additions to the list of options (boolean). Requires the use of selection, options and search.*/
  allowAdditions?: boolean,
  /** A Dropdown can reduce its complexity.*/
  basic?: boolean,
  /** Format the Dropdown to appear as a button.*/
  button?: boolean,
  /** Using the clearable setting will let users remove their selection from a dropdown.*/
  clearable?: boolean,
  /** Whether or not the menu should close when the dropdown is blurred.*/
  closeOnBlur?: boolean,
  /** Whether or not the dropdown should close when the escape key is pressed.*/
  closeOnEscape?: boolean,
  /** Whether or not the menu should close when a value is selected from the dropdown. By default, multiple selection dropdowns will remain open on change, while single selection dropdowns will close on change.*/
  closeOnChange?: boolean,
  /** Whether or not the dropdown should strip diacritics in options and input search*/
  deburr?: boolean,
  /** Initial value of open.*/
  defaultOpen?: boolean,
  /** Currently selected label in multi-select.*/
  defaultSelectedLabel?: string | number,
  /** Initial value of upward.*/
  defaultUpward?: boolean,
  /** Initial value or value array if multiple.*/
  defaultValue?: string | number | boolean | (string | number | boolean)[],
  /** A dropdown menu can open to the left or to the right.*/
  direction?: "left" | "right",
  /** A dropdown menu can contain a header.*/
  header?: ReactNode,
  /** Shorthand for Icon.*/
  icon?: any,
  /** A dropdown can be formatted as a Menu item.*/
  item?: boolean,
  /** A dropdown can be labeled.*/
  labeled?: boolean,
  /** A selection dropdown can allow multiple selections.*/
  multiple?: boolean,
  /** Message to display when there are no results.*/
  noResultsMessage?: ReactNode,
  /** Called when a user adds a new item. Use this to update the options list.*/
  onAddItem?: ((event: KeyboardEvent<HTMLElement>, data: DropdownProps) => void),
  /** Called when the user attempts to change the value.*/
  onChange?: ((event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void),
  /** Called when a multi-select label is clicked.*/
  onLabelClick?: ((event: MouseEvent<HTMLElement, MouseEventInit>, data: LabelProps) => void),
  /** Placeholder text.*/
  placeholder?: string,
  /** A dropdown can be formatted so that its menu is pointing.*/
  pointing?: boolean | "top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right",
  /** Mapped over the active items and returns shorthand for the active item Labels. Only applies to multiple Dropdowns.
   * item	A currently active dropdown item.
   * index	The current index.
   * defaultLabelProps	The default props for an active item Label.
  */
  renderLabel?: ((item: DropdownItemProps, index: number, defaultLabelProps: LabelProps) => any)
  /** A dropdown can have its menu scroll.*/
  scrolling?: boolean,
  /** Currently selected label in multi-select.*/
  selectedLabel?: string | number,
  /** The text displayed in the dropdown, usually for the active item.*/
  text?: string,
  /** Custom element to trigger the menu to become visible. Takes place of 'text'.*/
  trigger?: ReactNode,
  /** Current value or value array if multiple. Creates a controlled component.*/
  value?: string | number | boolean | (string | number | boolean)[]
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
