import PageTabItemModel from './PageTabItemModel';

interface PageTabContextModel {
  //
  activeName: string | null;
  initTab: (tabItem: PageTabItemModel) => void;
}

export default PageTabContextModel;
