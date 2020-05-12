import React, { Component } from 'react';
import docs from './docs';

import { SearchBox } from '~/lib/ui/index';

export const BasicStory = (props:any) => {
  class BasicStoryComponent extends Component {
    state = {
      data:{}
    };

    onSearch = (data:object) => {
      this.setState({data:data});
    }

    render(){
      const {data} = this.state;

      const sampleOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ];

      return (
        <SearchBox onSearch={this.onSearch}>
          <SearchBox.Input propname="text" label="Label"/>
          <SearchBox.Check propname="check" label="동의하겠습니다."/>
          <SearchBox.Group>
            <SearchBox.Radio propname="radio" label="1" value="1"/>
            <SearchBox.Radio propname="radio" label="2" value="2"/>
            <SearchBox.Radio propname="radio" label="3" value="3"/>
          </SearchBox.Group>
          <SearchBox.Select propname="select" options={sampleOptions} label="선택"/>
          <SearchBox.Button text="Search"/>

          <div>
            <h3>Result</h3>
            <textarea value={JSON.stringify(data)} readOnly/>
          </div>
        </SearchBox>
      );
    }
  }

  return <BasicStoryComponent {...props} />
}

BasicStory.story = {
  name: "basic"
}

export default {
  title: docs.title,
  component: docs.component,
  parameters: {...docs.parameters}
}
