import {AlertStore} from '~/lib/service';

export function alert(...args: any) {
  AlertStore.instance.alert(args[0], args[1]);
}

export function confirm(...args: any) {
  // ...args args[0]..
  const argLength = args.length

  AlertStore.instance.confirm(args[0], args[1]);

  if (argLength > 2) {
    promise1().then(function (result: any) {
      console.log(result);
      if (AlertStore.instance.confirmed) {
        args[2]();
      }
    }).catch(e => {
      // 처리하고 싶은 방식
    })
  }
}

export function close() {
  AlertStore.instance.close();
}

export function confirmed() {
  AlertStore.instance.setConfirmed();
}

function promise1() {
  return new Promise(function (resolve, reject) {
    console.log(AlertStore.instance.confirmed);

    if (AlertStore.instance.confirmed) {
      resolve("yes");
    } else {
      reject("no");
    }
  });
}
