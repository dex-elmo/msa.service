/*
 * Copyright 2020. Nuri Telecom. All Rights Reserved.
 *
 * - 0-Simple.story.tsx
 * - author: Sungyub NA <mailto: syna@nuritelecom.com>
 */

import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Container } from 'semantic-ui-react';
import docs from './docs';

import { NewWindow } from '~/lib/ui';

interface State {
  opened: boolean,
  count: number,
}

export const Simple = (props: any) => {
  class Story extends Component<any, State> {
    private interval: NodeJS.Timeout | undefined;

    state: State = {
      opened: false,
      count: 0,
    };

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }, 1000);
    }

    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }

    toggleOpened = () => {
      // eslint-disable-next-line react/destructuring-assignment
      action(this.state.opened ? 'Closing the window' : 'Opening the window')();
      this.setState(({ opened }) => ({ opened: !opened }));
    };

    newWindowUnloaded = () => {
      action('Window unloaded')();
      this.setState({ opened: false });
    };

    render() {
      const { opened, count } = this.state;
      return (
        <Container>
          <h2>새창</h2>
          <h3>Example</h3>
          <h4>카운트: { count }...</h4>
          <Button color="instagram" onClick={ () => this.toggleOpened() }>
            { opened ? '빨리 새창을 닫아죠!!' : '어서 새창을 열어죠!!' }
          </Button>
          { opened && (
            <NewWindow
              onUnload={ () => this.newWindowUnloaded() }
              features={ {
                left: 200, top: 200, width: 400, height: 400,
              } }
            >
              <Container>
                { /* eslint-disable-next-line jsx-a11y/accessible-emoji */ }
                <h2>안녕🤪</h2>
                <h4>여기에서도 카운트 동작함 { count }...</h4>
                <Button color="instagram">이 녀석도 부모 컴포넌트와 같은 스타일~</Button>
              </Container>
            </NewWindow>
          ) }
        </Container>
      );
    }
  }

  return <Story { ...props } />;
};

Simple.story = {
  name: 'simple',
};

export default {
  title: 'component|NewWindow',
  component: docs.component,
  parameters: { ...docs.parameters },
};
