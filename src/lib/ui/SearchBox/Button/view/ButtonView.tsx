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
  /** Passed to the control component*/
  type?: string,
  /** A button can have different colors.*/
  color?: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | "facebook" | "google plus" | "vk" | "twitter" | "linkedin" | "instagram" | "youtube",
  /** A button can be aligned to the left or right of its container.*/
  floated?: "left" | "right",
  /** Add an Icon by name, props object, or pass an .*/
  icon?: SemanticShorthandItem<IconProps>
  /** A labeled button can format a Label or Icon to appear on the left or right.*/
  labelPosition?: "left" | "right",
  /** A button can have different sizes.*/
  size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive"
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
