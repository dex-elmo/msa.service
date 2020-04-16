import React, { Component } from 'react'
import docs from './docs'

export const Basic = (props: any) => {
  //
  class BasicStory extends Component {
    //
    render () {
      //
      return (
        <div></div>
      )
    }
  }

  return <BasicStory {...props} />
}

Basic.story = {
  name: 'basic',
}

export default {
  title: 'service|EchoService',
  component: docs.component,
  parameters: { ...docs.parameters },
}
