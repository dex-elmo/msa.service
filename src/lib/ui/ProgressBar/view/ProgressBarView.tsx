import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import {observer} from "mobx-react";
import {ProgressStore, store} from '~/lib/service';

interface Props {
    /** post 는 3번째 인자에 visible 속성을, get은 2번째 속성에 visible 속성을 true. false  ( default : true ) */
    progressStore?: ProgressStore

  }

@observer
class progressBarView extends Component<Props>{

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render(){
      const {store_active} = store.progressStore;

        return(
          <div>
          <Dimmer.Dimmable  dimmed={store_active}>
          <Dimmer active={store_active} inverted onClickOutside={this.handleShow} page >
          <Loader content='Loading'/>
          </Dimmer>
          </Dimmer.Dimmable>
          </div>
        )
    }
}
export default progressBarView;
