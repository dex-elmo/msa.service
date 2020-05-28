import React from 'react';
import {
  Button, Image, Modal, Select, Table,
} from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
  handleCertFilePath:any,
  handleCertTypeCode:any,
}

interface State {
  type:string;
  file: string,
  previewUrl: any,
  open:boolean,
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
      type: 'Id Card type',
      file: '',
      previewUrl: '',
      open: false,
    };
  }

  changeType = (e:any, data:any) => {
    this.setState({
      type: data.value,
    });
    this.props.handleCertTypeCode(data.value);
  }

  uploadCertificate = async () => {
    // await UserApi.uploadFile();
  }

  showModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({
      file: '',
      previewUrl: '',
      open: false,
    });
  }

  approveFile = async () => {
    if (this.state.file === '') {
      window.alert('파일을 업로드 해주세요');
      return false;
    }

    const formData = new FormData();
    formData.append('id_file_path', this.state.file);
    const filePath = await UserApi.uploadFile(formData);
    this.setState({ open: false });
    window.alert('파일 업로드 완료');

    this.props.handleCertFilePath(filePath);
    return true;
  }

  handleFileOnChange = (event:any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        previewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const {
      type, previewUrl, open,
    } = this.state;

    let profilePreview = null;
    if (previewUrl !== '') {
      profilePreview = <img className="profile_preview" src={previewUrl} alt="" style={{ width: '100%' }} />;
    }

    return (
      <>
        <Select placeholder="Select Certificate" options={ this.addCert } onChange={this.changeType} />

        <Modal trigger={<Button onClick={this.showModal}>Show Modal</Button>} size="mini" onClose={this.closeModal} open={open}>
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
      </>
    );
  }
}

export default UserAdditionalCertificate;
