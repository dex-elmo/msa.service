import React from 'react';
import {
  Button, Icon, Modal, Select, Image,
} from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
  handleCertFilePath:any,
  handleCertTypeCode:any,
  defaultCertFilePath?:string,
  defaultCertTypeCode?:string,
}

interface State {
  type:string | undefined;
  file: string,
  previewUrl: any,
  open:boolean,
  typeBox:boolean,
  uploadCheck: string,
  fileName: string | undefined,
  imageOpen:boolean,
  imageUrl:string,
}

@autobind
class UserAdditionalCertificate extends React.Component<Props, State> {
  addCert = [
    { key: '1', value: '1', text: 'Registered Tenancy Agreement' },
    { key: '2', value: '2', text: 'Utility Bill' },
    { key: '3', value: '3', text: 'Income Tax Certificate' },
    { key: '4', value: '4', text: 'Bank Statements' },
    { key: '5', value: '5', text: 'Reference Letter' },
  ]

  constructor(props:Props) {
    super(props);
    this.state = {
      type: 'Select Certificate',
      file: '',
      previewUrl: '',
      open: false,
      typeBox: false,
      uploadCheck: 'display',
      fileName: '',
      imageOpen: false,
      imageUrl: '',
    };
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
    if (prevProps.defaultCertFilePath !== this.props.defaultCertFilePath) {
      this.setState({
        typeBox: true,
        uploadCheck: 'none',
        fileName: 'certificate Image',
        imageUrl: `http://localhost:8080/api/v2/user/image?filePath=${this.props.defaultCertFilePath}`,
      });
      this.setTypeCode(this.props.defaultCertTypeCode);
      this.props.handleCertTypeCode(this.props.defaultCertTypeCode);
    }
  }

  changeType = (e:any, data:any) => {
    this.setTypeCode(data.value);
    this.props.handleCertTypeCode(data.value);
  }

  showModal = () => {
    if (this.state.type === 'Select Certificate') {
      window.alert('select certificate type first');
      return false;
    }
    this.setState({ open: true });
    return true;
  }

  closeModal = () => {
    this.setState({
      file: '',
      previewUrl: '',
      open: false,
      fileName: '',
    });
  }

  handleFileOnChange = (event:any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        fileName: file.name,
        previewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  approveFile = async () => {
    if (this.state.file === '') {
      window.alert('파일을 업로드 해주세요');
      return false;
    }

    const formData = new FormData();
    formData.append('id_file_path', this.state.file);
    const filePath = await UserApi.uploadFile(formData);
    this.setState({
      open: false,
      typeBox: true,
      uploadCheck: 'none',
      imageUrl: `http://localhost:8080/api/v2/user/image?filePath=${filePath}`,
    });
    window.alert('파일 업로드 완료');

    this.props.handleCertFilePath(filePath);
    return true;
  }

  deleteFile = () => {
    this.setState({
      file: '',
      previewUrl: '',
      typeBox: false,
      uploadCheck: 'unset',
      fileName: '',
    });
    // }
  }

  setTypeCode = (typeCode:string | undefined) => {
    let type;
    switch (typeCode) {
      case '1': type = 'Registered Tenancy Agreement'; break;
      case '2': type = 'Utility Bill'; break;
      case '3': type = 'Income Tax Certificate'; break;
      case '4': type = 'Bank Statements'; break;
      case '5': type = 'Reference Letter'; break;
      default: break;
    }
    this.setState({
      type,
    });
  }

  handleImageModal = () => {
    this.setState({
      imageOpen: true,
    });
  }

  closeImageModal = () => {
    this.setState({
      imageOpen: false,
    });
  }

  render() {
    const {
      previewUrl, open, typeBox, uploadCheck, fileName, imageOpen, imageUrl,
    } = this.state;

    let profilePreview = null;
    if (previewUrl !== '') {
      profilePreview = <img className="profile_preview" src={previewUrl} alt="" style={{ width: '100%' }} />;
    }

    return (
      <>
        <Select
          placeholder="Select Certificate"
          text={this.state.type}
          options={ this.addCert }
          onChange={this.changeType}
          disabled={typeBox}
        />

        {
          fileName
            ? (
              <span>
                <a
                  onClick={this.handleImageModal}
                >
                  {fileName}
                </a>
                {/*<a href={previewUrl} download={fileName}>{fileName}</a>*/}
                <Icon name="close" onClick={this.deleteFile} />
              </span>
            )
            : ''
        }

        <Modal
          trigger={(
            <Button
              onClick={this.showModal}
              style={{ display: uploadCheck }}
            >
              Upload
            </Button>
          )}
          size="mini"
          onClose={this.closeModal}
          open={open}
        >
          <Modal.Header style={{ textAlign: 'center' }}>Upload</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {
                profilePreview
              }
              <div style={{ textAlign: 'center', padding: '10px 5px 10px 5px' }}>
                <input
                  type="file"
                  accept="image/jpg,image/png,image/jpeg"
                  name="id_file_path"
                  onChange={this.handleFileOnChange}
                  style={{ width: '100%' }}
                />
              </div>
              <div style={{ padding: '5px' }}>
                <Button onClick={this.approveFile} style={{ width: '100%' }}>Confirm</Button>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>

        <Modal
          open={imageOpen}
          onClose={this.closeImageModal}
          style={{ width: 'auto' }}
        >
          <Image src={imageUrl} />
        </Modal>
      </>
    );
  }
}

export default UserAdditionalCertificate;
