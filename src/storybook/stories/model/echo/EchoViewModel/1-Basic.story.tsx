import React, { Component } from 'react'
import docs from './docs'

export const Basic = (props: {}) => {
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
  title: 'model|EchoViewModel',
  component: docs.component,
  parameters: { ...docs.parameters },
}
