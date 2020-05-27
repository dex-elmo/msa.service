import React from 'react';
import { Button } from 'semantic-ui-react';

class SharedFileUpload extends React.Component<any, any> {
  render() {
    return (
      <>
        <div style={{ width: '200px;' }}>
          <div>Upload</div>
          <div>
            image
          </div>
          <div>
            image
            button
          </div>
          <div>
            <Button content="button" />
          </div>
        </div>
      </>
    );
  }
}

export default SharedFileUpload;
