import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
// import { create } from '@storybook/theming/create';
import 'semantic-ui-css/semantic.min.css';

function configurePreview(callback) {
  //
  const orders = ['model', 'decorator', 'service', 'module', 'component'];

  addParameters({
    options: {
      // package.json name & version 가져와서 보여줌
      // theme: create({
      //   base: 'light',
      //   brandTitle: `<div>&nbsp;${APP_NAME}</br>&nbsp;- ${APP_VERSION}</div>`,
      // }),
      storySort: (prev, next) => {
        //
        const { id: prevId, kind: prevKind, parameters: prevParams } = prev[1];
        const { id: nextId, kind: nextKind, parameters: nextParams } = next[1];

        if (prevKind === nextKind) {
          return prevParams.order < nextParams.order ? 0 : 1;
        }
        const prevIndex = orders.findIndex(
          (order) => prevId.startsWith(`${order}-`),
        );
        const nextIndex = orders.findIndex(
          (order) => nextId.startsWith(`${ order }-`),
        );

        if (prevIndex === nextIndex) {
          return 0;
        }
        return prevIndex < nextIndex ? 0 : 1;
      },
    },
  });

  addDecorator((storyFn) => (
    React.createElement('div', { style: { padding: 20 } }, storyFn())
  ));
  { /* <div style={{ padding: 20 }}> */ }
  { /*  {storyFn()} */ }
  { /* </div> */ }

  if (typeof callback === 'function') {
    callback();
  }
}

export default configurePreview;
