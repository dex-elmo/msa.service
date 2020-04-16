import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import logoImage from '../public/img/logo.png';

import SampleComponent from '@nara.platform/sample-button-component';

function App() {
  return (
    <div className="App">
      <div>
        <h3>Hello World!</h3>
      </div>
      <div>
        <Button primary>test</Button>
      </div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
      </div>
      <div>
        <img src={logoImage} />
      </div>
      <SampleComponent />
    </div>
  );
}

export default App;
