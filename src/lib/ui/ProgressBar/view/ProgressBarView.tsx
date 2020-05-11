import React, { Component } from 'react';
import { Dimmer, Loader, Segment} from 'semantic-ui-react'
import {observer} from "mobx-react";
import {ProgressStore, store} from '~/lib/service';

interface Props {
     /** 사용 여부, default visible : true
       axios.post("/",{
                                params: {
                                        visible:true
                                        }
                              })*/
    progressStore?: ProgressStore
    
  }

@observer
class progressBarView extends Component<Props>{
    constructor(props:any) {
        super(props);
    }

    render(){

      const {store_active} = store.progressStrore;
      console.log('store_active',store_active);
        return(
          <Loader active={store_active} content='Loading'/>
        )
    }
}
export default progressBarView;