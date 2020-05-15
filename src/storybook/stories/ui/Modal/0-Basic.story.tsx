import React, { Component } from 'react'
import docs from './docs'
import {Modal} from "~/lib";

export const Basic = (props: any) => {
  //
  class Story extends Component {

    handle(a:string){
      console.log('handle');
      console.log(a);
    }

    render () {
      const header =
        <div>
          <h3>header</h3>
        </div>
      ;

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
          <p>C</p>
        </div>
      ;

      // const actions = [{key : 'handle', content:'yes1', color:'green'} , {key : '2', content:'no', color:'grey'}];
      const actions = [{key : '1', content:'yes', color:'green', func:this.handle} , {key : '2', content:'no', color:'grey', func:this.handle}];

      const image = 'https://react.semantic-ui.com/images/avatar/large/rachel.png';

      return (
          <Modal contents={contents} header={header} actions={actions} image={image} />
      )
    }
  }

  return <Story {...props} />
};

Basic.story = {
  name: 'basic',
};

export default {
  title: 'component|Modal',
  component: docs.component,
  parameters: { ...docs.parameters },
}
