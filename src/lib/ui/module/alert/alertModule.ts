import { AlertStore } from '~/lib/service';

export function show(content:string|object, param:any) {
  AlertStore.instance.show(content, param);
}

export function close(){
  AlertStore.instance.close();
}
