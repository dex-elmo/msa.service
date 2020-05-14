import React, { ReactNode } from 'react';
import { Form as SemanticForm, FormProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchStore from '~/lib/service/search/store/SearchStore';

interface Props extends FormProps {
  onSearch:Function
}

interface SearchBoxProps {
  /** 검색 결과를 JSON으로 넘긴다. Callback을 실행한다.*/
  onSearch: Function,
  /** Primary content.*/
  children?: ReactNode,
  /** Additional classes.*/
  className?: string
}

@observer
class SearchBoxView extends React.Component<SearchBoxProps> {
  handleSubmit = () => {
    // JSON Data
    this.props.onSearch(searchStore.searchParams);
  };

  render() {
    const { children } = this.props;

    return(
      <SemanticForm onSubmit={this.handleSubmit}>
        {children}
      </SemanticForm>
    );
  }
}

export default SearchBoxView;
