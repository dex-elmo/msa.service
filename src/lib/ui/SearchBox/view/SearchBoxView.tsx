import React, { ReactNode } from 'react';
import { Form as SemanticForm, FormProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import searchModel from '../../../model/search/SearchModel';

interface Props extends FormProps {
  onSearch:Function
}

interface SearchBoxProps {
  /** 검색 결과를 JSON으로 넘긴다. Callback을 실행한다.*/
  onSearch: Function,
  /** Primary content.*/
  children?: ReactNode,
  /** Additional classes.*/
  className?: string,
  /** A form can have its color inverted for contrast.*/
  inverted?: boolean,
  /** Automatically show a loading indicator.*/
  loading?: boolean,
  /** Forms can automatically divide fields to be equal width.*/
  widths?: "equal"
}

@observer
class SearchBoxView extends React.Component<SearchBoxProps> {
  handleSubmit = () => {
    // JSON Data
    this.props.onSearch(searchModel.searchParams);
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
