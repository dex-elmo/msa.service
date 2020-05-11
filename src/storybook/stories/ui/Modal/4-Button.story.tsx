import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Button = (props: any) => {
  //
  class Story extends Component {

    render () {
      const header = 'Header';
      const contents = 'Content';
      const actions = [
        {key : 'red', content:'red', color:'red'},
        {key : 'orange', content:'orange', color:'orange'},
        {key : 'yellow', content:'yellow', color:'yellow'},
        {key : 'olive', content:'olive', color:'olive'},
        {key : 'green', content:'green', color:'green'},
        {key : 'teal', content:'teal', color:'teal'},
        {key : 'blue', content:'blue', color:'blue'},
        {key : 'violet', content:'violet', color:'violet'},
        {key : 'purple', content:'purple', color:'purple'},
        {key : 'pink', content:'pink', color:'pink'},
        {key : 'brown', content:'brown', color:'brown'},
        {key : 'grey', content:'grey', color:'grey'},
        {key : 'black', content:'black', color:'black'},
        {key : 'facebook', content:'facebook', color:'facebook'},
        {key : 'google plus', content:'google plus', color:'google plus'},
        {key : 'instagram', content:'instagram', color:'instagram'},
        {key : 'linkedin', content:'linkedin', color:'linkedin'},
        {key : 'twitter', content:'twitter', color:'twitter'},
        {key : 'vk', content:'vk', color:'vk'},
        {key : 'youtube', content:'youtube', color:'youtube'}
        ];

      return (
        <div>
          <Modal header={header} contents={contents} size={'large'} actions={actions} buttonName={'Button Modal'}/>
        </div>
      )
    }
  }

  return <Story {...props} />
};

Button.story = {
  name: 'button',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
