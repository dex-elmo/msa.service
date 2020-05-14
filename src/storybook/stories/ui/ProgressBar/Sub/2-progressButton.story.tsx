import React, { Component,CSSProperties } from 'react'
import { Button} from 'semantic-ui-react'
import docs from './docs'
import autoBind from 'auto-bind';
import { Loader } from 'semantic-ui-react'
import { observable } from 'mobx';
import {observer} from "mobx-react";

export const progressButton = (props: any) => {
  //
  @observer
  class ProgressButtonStory extends Component{

    @observable store_active = false;


    componentDidMount(){
      autoBind(this);
    }

    onProgress(){
      this.store_active = true;
    }

    offProgress(){
      this.store_active = false;
    }

    render () {

      const style1:CSSProperties ={
        backgroundColor : 'pink'
      }


      return (
        <div style={style1}>
            <Button onClick={()=> this.onProgress()}>로딩 on</Button>
            <Button onClick={()=> this.offProgress()}>로딩 off</Button>
            <Loader active = {this.store_active} content='Loading'/>
        </div>
      )
    }
  }

  return <ProgressButtonStory {...props} />
}

progressButton.story = {
  name: 'progressButton',
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: { ...docs.parameters },
}
