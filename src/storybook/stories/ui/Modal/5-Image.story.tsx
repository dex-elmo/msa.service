import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Image = (props: any) => {
  //
  class Story extends Component {

    render () {
      const header = 'Header';

      const contents =
        <div>
          <h3>title</h3>
          <p>A</p>
          <div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
          <p>B</p>
          <div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
          <p>C</p>
          <div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </div>
      ;

      const actions = [{key : 'ok', content:'ok', color:'green'} , {key : 'cancel', content:'cancel', color:'grey'}];

      const image = 'https://react.semantic-ui.com/images/avatar/large/rachel.png';

      return (
        <div>
          <Modal header={header} contents={contents} size={'small'} image={image} imgSize={'medium'} actions={actions} buttonName={'Image Modal'}/>
        </div>
      )
    }
  }

  return <Story {...props} />
};

Image.story = {
  name: 'image',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
