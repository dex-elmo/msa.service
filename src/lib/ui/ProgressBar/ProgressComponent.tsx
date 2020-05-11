import React, { Component } from 'react';
import { Dimmer, Loader, Segment, Button} from 'semantic-ui-react'
import {observer} from "mobx-react";
import {ProgressStore, store} from '~/lib/service';

interface Props {
    progressStore?: ProgressStore
    
  }

@observer
class ProgressComponent extends Component<Props>{
    constructor(props:any) {
        super(props);
    }

    render(){
      // const {active} = this.props
      const {store_active} = store.progressStrore;
      console.log('store_active',store_active);
        return(
            <div>
              <Segment>
                   <Dimmer active = {store_active}>
                   <Loader/>
                   </Dimmer>
              </Segment>
              
             </div>
        )
    }
}
export default ProgressComponent;