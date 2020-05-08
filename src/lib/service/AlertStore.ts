import {observable, action, computed} from 'mobx';
import autobind from "~/lib/ui/module/autobindDecorator";

@autobind
class AlertStore {

  static instance: AlertStore;

  @observable
  open:boolean = false;

  @observable
  header:string|object = '';

  @observable
  contents:string|object = '';

  @observable
  size: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen' = 'mini';

  @observable
  centered:boolean = true;

  @observable
  onClosed:boolean = true;

  @observable
  dimmer: true | 'blurring' | 'inverted' = true;

  @observable
  actions:string[] | null = [];

  @action
  show(header:string|object, content:string|object, param:any) {
    this.open = true;
    this.header = header;
    this.contents = content;

    param.size !== undefined || '' ?  this.size = param.size : this.size = 'mini';
    param.centered !== undefined || '' ? this.centered = param.centered : this.centered = true;
    param.onClosed !== undefined || '' ? this.onClosed = param.onClosed : this.onClosed = true;
    param.dimmer !== undefined || '' ? this.dimmer = param.dimmer : this.dimmer = true;
    param.actions !== undefined || '' ? this.actions = param.actions : this.actions = null;
  }

  @action
  close(){
    this.open = false;
  }
}

AlertStore.instance = new AlertStore();

export default AlertStore;
