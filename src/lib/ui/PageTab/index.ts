import PageTabContainer from './container/PageTabContainer';
import PageTabItem from './PageTabItem';

type PageTabType = typeof PageTabContainer & {
  Item: typeof PageTabItem,
};

const PageTab = PageTabContainer as PageTabType;
PageTab.Item = PageTabItem;

export default PageTab;
