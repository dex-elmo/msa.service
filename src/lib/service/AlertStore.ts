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
  actions:{key:string, content:string, color:string}[] | null = [];

  @observable
  confirmed:boolean = false;

  @action
  alert(content:string|object, param:any) {
    this.open = true;
    this.contents = content;
    this.confirmed = false;

    param.header !== undefined || '' ?  this.header = param.header : this.header = '';
    param.size !== undefined || '' ?  this.size = param.size : this.size = 'mini';
    param.centered !== undefined || '' ? this.centered = param.centered : this.centered = true;
    param.onClosed !== undefined || '' ? this.onClosed = param.onClosed : this.onClosed = true;
    param.dimmer !== undefined || '' ? this.dimmer = param.dimmer : this.dimmer = true;
    param.actions !== undefined || '' ? this.actions = param.actions.slice(0,1) : this.actions = null;
  }

  @action
  confirm(content:string|object, param:any) {
    this.open = true;
    this.contents = content;
    this.confirmed = false;

    param.header !== undefined || '' ?  this.header = param.header : this.header = '';
    param.size !== undefined || '' ?  this.size = param.size : this.size = 'mini';
    param.centered !== undefined || '' ? this.centered = param.centered : this.centered = true;
    param.onClosed !== undefined || '' ? this.onClosed = param.onClosed : this.onClosed = true;
    param.dimmer !== undefined || '' ? this.dimmer = param.dimmer : this.dimmer = true;
    param.actions !== undefined || '' ? this.actions = param.actions.slice(0,2) : this.actions = null;
  }

  @action
  setConfirmed(){
    this.confirmed = true;
  }

  @action
  close(){
    this.open = false;
  }
}

AlertStore.instance = new AlertStore();

export default AlertStore;
