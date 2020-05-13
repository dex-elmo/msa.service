import React from 'react';
import PageTabContextModel from '~/lib/model/pageTab/PageTabContextModel';
import { PageTabItemModel } from '~/lib/model';

// React 16.3 부터 Context를 이용해서 모든 부모/자식간에 값을 공유할 수 있다.
const PageTabContext = React.createContext<PageTabContextModel>({
  activeName: null,
  initTab: (tabItem: PageTabItemModel) => {},
});

export default PageTabContext;
