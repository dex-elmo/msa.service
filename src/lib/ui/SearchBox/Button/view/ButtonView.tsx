import React from 'react';
import { FormButton as SemanticFormButton, FormButtonProps, SemanticShorthandItem, IconProps } from 'semantic-ui-react';

interface Props extends FormButtonProps {
  text?: string,
}

interface SearchButtonProps {
  /** 버튼에 넣을 텍스트 */
  text?: string,
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
  /** A button can show it is currently the active user selection.*/
  active?: boolean,
  /** A button can be attached to other content.*/
  attached?: "left" | "right" | "top" | "bottom",
  /** A button can be circular.*/
  circular?: boolean,
  /** A button can have different colors.*/
  color?: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | "facebook" | "google plus" | "vk" | "twitter" | "linkedin" | "instagram" | "youtube",
  /** A button can be aligned to the left or right of its container.*/
  floated?: "left" | "right",
  /** Add an Icon by name, props object, or pass an .*/
  icon?: SemanticShorthandItem<IconProps>
  /** A labeled button can format a Label or Icon to appear on the left or right.*/
  labelPosition?: "left" | "right",
  /** A button can show a loading indicator.*/
  loading?: boolean,
  /** A button can have different sizes.*/
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive",
  /** A button can be formatted to toggle on and off.*/
  toggle?: boolean
}

class ButtonView extends React.Component<SearchButtonProps> {
  render(){
    const { text } = this.props;

    return(
      <SemanticFormButton {...this.props}>{text}</SemanticFormButton>
    );
  }
}

export default ButtonView;
