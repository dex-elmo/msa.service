import React from 'react';
import QRCode from 'qrcode.react';

interface Props {
  value:string;
  size:number;
}

class QrCode extends React.Component<Props, any> {
  static defaultProps = {
    size: 128,
  }

  render() {
    const { value, size } = this.props;

    return (
      <>
        <QRCode
          value={value}
          size={size}
        />
      </>
    );
  }
}

export default QrCode;
