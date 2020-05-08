import React, { ReactNode } from 'react';
import { FormGroup as SemanticFormGroup, FormGroupProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';

interface SearchGroupProps {
  /** Additional classes.*/
  className?: string,
  /** Fields can show related choices.*/
  grouped?: boolean,
  /** Multiple fields may be inline in a row.*/
  inline?: boolean
}

@observer
class GroupView extends React.Component<SearchGroupProps> {
  render(){
    return(
      <SemanticFormGroup {...this.props}/>
    );
  }
}

export default GroupView;
