import React, { Component } from 'react';
import autobind from 'auto-bind/react';

// import { ComponentData } from '~/lib/model';
import { PageTabItemModel } from '~/lib/model';
import PageTabContext from '../context/PageTabContext';

import PageMenuView from '../view/PageMenuView';
import PageMenuItemView from '../view/PageMenuItemView';

interface Props {
  children: React.ReactNode;
  defaultActiveName?: string;
  activeName?: string;
  // onChange?: (e: React.SyntheticEvent, data: ComponentData) => void;
  onChange?: (e: React.SyntheticEvent, data: any) => void;
}

interface State {
  items: PageTabItemModel[];
  activeName: string | null;
  controlled: boolean;
}

class PageTabContainer extends Component<Props, State> {
  // Default 값을 Setting
  static defaultProps = {
    defaultActiveName: undefined,
    activeName: undefined,
    onChange: () => {},
  };

  state: State = {
    items: [],
    activeName: null,
    controlled: false,
  };


  constructor(props: Props) {
    //
    super(props);
    autobind(this);

    if (props.activeName) {
      this.state.controlled = true;
    }
    else {
      this.state.activeName = props.defaultActiveName || null;
    }
  }


  getContext() {
    //
    return {
      activeName: this.getActiveName() || null,
      initTab: this.initTabContext,
      activateTab: this.activateTabContext,
    };
  }

  initTabContext(tabItem: PageTabItemModel): void {
    //
    this.setState((prevState) => ({
      items: [...prevState.items, tabItem],
      activeName: prevState.activeName || tabItem.name,
    }));
  }

  activateTabContext(tabName: string): void {
    //
    this.setState({
      activeName: tabName,
    });
  }

  getActiveName(): string | undefined {
    //
    const { activeName: activeNameProps } = this.props;
    const { controlled, activeName: activeNameState } = this.state;

    if (controlled) {
      return activeNameProps;
    }
    else {
      return activeNameState || undefined;
    }
  }

  // onClickMenuItem(e: React.MouseEvent, data: ComponentData) {
  onClickMenuItem(e: React.MouseEvent, data: any) {
    //
    const activeName = data.name;

    this.setState({
      activeName,
    });
    this.props.onChange!(e, { activeName });
  }

  render() {
    //
    const { children } = this.props;
    const { items } = this.state;

    return (
      // Provider를 이용하여 Context 변경 사항을 제공.
      // Provider의 Value는 하위의 모든 Consumer에서 사용 가능. Provider 하위의 모든 Consumer의 Provider의 Value가 변경 될 때마다 렌더링 됨.
      <PageTabContext.Provider
        value={this.getContext()}
      >
        <PageMenuView>
          {items.map(item => (
            <PageMenuItemView
              key={`page-tab-menu-${item.name}`}
              name={item.name}
              text={item.text}
              activeName={this.getActiveName()}
              onClick={this.onClickMenuItem}
            />
          ))}
        </PageMenuView>

        {children}
      </PageTabContext.Provider>
    );
  }
}

export default PageTabContainer;
