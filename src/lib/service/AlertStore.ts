import {observable, action, computed} from 'mobx';
import autobind from "~/lib/ui/module/autobindDecorator";

@autobind
class AlertStore {

  static instance: AlertStore;

  @observable
  open:boolean = false;

  @observable
  headerContent:string = '';

  @observable
  contentContent:string = '';

  @observable
  header:boolean = true;

  @observable
  content:boolean = true;

  @observable
  size:any = 'mini';

  @observable
  centered:boolean = true;

  @observable
  onClosed:boolean = true;

  @observable
  dimmer:any = true;

  @observable
  actions:string[] | null = [];

  @observable
  closeIcon:boolean = false;

  @action
  show(header:string, content:string, param:any) {
    this.open = true;
    this.headerContent = header;
    this.contentContent = content;

    param.size !== undefined || '' ?  this.size = param.size : this.size = 'mini';
    param.centered !== undefined || '' ? this.centered = param.centered : this.centered = true;
    param.onClosed !== undefined || '' ? this.onClosed = param.onClosed : this.onClosed = true;
    param.dimmer !== undefined || '' ? this.dimmer = param.dimmer : this.dimmer = true;
    param.header !== undefined || '' ? this.header = param.header : this.header = true;
    param.content !== undefined || '' ? this.content = param.content : this.content = true;
    param.actions !== undefined || '' ? this.actions = param.actions : this.actions = null;
    param.closeIcon !== undefined || '' ? this.closeIcon = param.closeIcon : this.closeIcon = false;
  }

  @action
  close(){
    this.open = false;
  }
}

AlertStore.instance = new AlertStore();

export default AlertStore;
