import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Centered = (props: any) => {
  //
  class Story extends Component {

    render () {
      const header = 'Header';
      const contents = 'Content';
      const actions = [{key : 'ok', content:'ok', color:'green'} , {key : 'cancel', content:'cancel', color:'grey'}];

      return (
        <div>
          <Modal header={header} contents={contents} centered={true} actions={actions} buttonName={'Modal centered'}/>
          <Modal header={header} contents={contents} centered={false} actions={actions} buttonName={'Modal non-centered'}/>
        </div>
      )
    }
  }

  return <Story {...props} />
};

Centered.story = {
  name: 'centered',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
