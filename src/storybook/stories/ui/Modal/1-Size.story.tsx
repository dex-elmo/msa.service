import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Size = (props: any) => {
  //
  class Story extends Component {

    render () {
      const header = 'Header';
      const contents = 'Content';
      const actions = [{key : 'ok', content:'ok', color:'green'} , {key : 'cancel', content:'cancel', color:'grey'}];

      return (
        <div>
          <Modal header={header} contents={contents} size={"mini"} actions={actions} buttonName={"mini"}/>
          <Modal header={header} contents={contents} size={"tiny"} actions={actions} buttonName={"tiny"}/>
          <Modal header={header} contents={contents} size={"small"} actions={actions} buttonName={"small"}/>
          <Modal header={header} contents={contents} size={"large"} actions={actions} buttonName={"large"}/>
          <Modal header={header} contents={contents} size={"fullscreen"} actions={actions} buttonName={"fullscreen"}/>
        </div>
      )
    }
  }

  return <Story {...props} />
};

Size.story = {
  name: 'size',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
