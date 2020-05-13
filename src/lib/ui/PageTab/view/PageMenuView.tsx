
import React, { Component } from 'react';
import autobind from 'auto-bind';

import { Menu } from 'semantic-ui-react';

interface Props {
}

class PageMenuView extends Component<Props> {
  constructor(props: Props){
    super(props);
    autobind(this);
  }

  //
  render() {
    //
    const { children } = this.props;

    return (
      <div className="underline-tab">
        <Menu secondary>
          {children}
        </Menu>
      </div>
    );
  }
}

export default PageMenuView;
