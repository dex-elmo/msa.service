import React, { Component } from 'react';
import autobind from 'auto-bind/react';

import { PageTabItemModel } from '~/lib/model';
import PageTabContext from '../../context/PageTabContext';

interface Props {
  name: string;
  text: string;
  component?: any;
}

class PageTabItemContainer extends Component<Props> {
  //
  static contextType = PageTabContext;

  constructor(props: Props){
    super(props);
    autobind(this);
  }

  componentDidMount() {
    //
    const { name, text } = this.props;
    const { initTab } = this.context;

    initTab(new PageTabItemModel(name, text));
  }

  context!: React.ContextType<typeof PageTabContext>;

  render() {
    //
    const { name, component, children } = this.props;
    const { activeName } = this.context;
    const Component = component as any;

    if (activeName !== name) {
      return null;
    }

    let activeNode = null;

    if (children) {
      activeNode = children;
    }
    else if (Component) {
      activeNode = <Component />;
    }

    return activeNode;
  }
}

export default PageTabItemContainer;
