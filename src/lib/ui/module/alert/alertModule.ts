import { AlertStore } from '~/lib/service';

export function show(header:string, content:string, param:any) {
  AlertStore.instance.show(header, content, param);
}

export function close(){
  AlertStore.instance.close();
}
