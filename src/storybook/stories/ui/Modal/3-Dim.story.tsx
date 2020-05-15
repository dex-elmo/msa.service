import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Dim = (props: any) => {
  //
  class Story extends Component {

    render () {
      const header = 'Header';
      const contents = 'Content';
      const actions = [{key : 'ok', content:'ok', color:'green'} , {key : 'cancel', content:'cancel', color:'grey'}];

      return (
        <div>
          <Modal header={header} contents={contents} dimmer={true} actions={actions} buttonName={'Default'}/>
          <Modal header={header} contents={contents} dimmer={'blurring'} actions={actions} buttonName={'Blurring'}/>
          <Modal header={header} contents={contents} dimmer={'inverted'} actions={actions} buttonName={'Inverted'}/>
        </div>
      )
    }
  }

  return <Story {...props} />
};

Dim.story = {
  name: 'dimmer',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
