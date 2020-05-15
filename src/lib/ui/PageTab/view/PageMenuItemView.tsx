import React, { Component } from 'react';
import autobind from 'auto-bind/react';

import { Menu } from 'semantic-ui-react';
// import { ComponentData } from '~/lib/model';

interface Props {
  name: string;
  text: string;
  activeName?: string;
  // onClick?: (e: React.MouseEvent, data: ComponentData) => void;
  onClick?: (e: React.MouseEvent, data: any) => void;
}

class PageMenuItemView extends Component<Props> {
  //
  static defaultProps = {
    activeName: undefined,
    onClick: () => {},
  };

  constructor(props: Props){
    super(props);
    autobind(this);
  }

  render() {
    //
    const { name, activeName, text, onClick } = this.props;

    return (
      <Menu.Item
        name={name}
        active={activeName === name}
        onClick={onClick}
      >
        {text}
      </Menu.Item>
    );
  }
}

export default PageMenuItemView;
