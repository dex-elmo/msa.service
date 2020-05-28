import React from 'react';
import {
  Button, Input, Select, Modal, Icon,
} from 'semantic-ui-react';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
  handleIdFilePath:any,
  handleIdSerialNo:any,
  handleIdTypeCode:any
}

interface State {
  type:string;
  typeCheck:boolean,
  file: string,
  previewUrl: any,
  open:boolean,
  typeBox:boolean,
  uploadCheck: string,
  fileName: string,
}

@autobind
class UserPhotoIdCard extends React.Component<Props, State> {
  idCard = [
    { key: '1', value: 'Voter ID Card', text: 'Voter ID Card' },
    { key: '2', value: 'National ID Card', text: 'National ID Card' },
    { key: '3', value: 'Driver\' License', text: 'Driver\' License' },
    { key: '4', value: 'NHIS ID', text: 'NHIS ID' },
    { key: '5', value: 'SSNIT ID', text: 'SSNIT ID' },
    { key: '6', value: 'Passport', text: 'Passport' },
  ];

  constructor(props:Props) {
    super(props);
    this.state = {
      type: 'Id Card type',
      typeCheck: false,
      file: '',
      previewUrl: '',
      open: false,
      typeBox: false,
      uploadCheck: 'display',
      fileName: '',
    };
  }

  changeType = (e:any, data:any) => { /* 이런 파마미터 타입 지정 어떻게 아는지 */
    this.setState({
      type: data.value,
      typeCheck: true,
    });
    this.props.handleIdTypeCode(data.value);
  }

  showModal = () => {
    if (this.state.typeCheck) {
      this.setState({ open: true });
    } else {
      window.alert('select Id Card type first');
    }
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
    });
    window.alert('파일 업로드 완료');

    this.props.handleIdFilePath(filePath);
    return true;
  }

  deleteFile = () => {
    const result = window.confirm('ID image must be attached. Are you sure you want to delete and then re-register?');
    if (result) {
      this.setState({
        file: '',
        previewUrl: '',
        typeBox: false,
        uploadCheck: 'unset',
        fileName: '',
      });
    }
  }

  render() {
    const {
      type, previewUrl, open, typeBox, uploadCheck, fileName,
    } = this.state;

    let profilePreview = null;
    if (previewUrl !== '') {
      profilePreview = <img className="profile_preview" src={previewUrl} alt="" style={{ width: '100%' }} />;
    }

    return (
      <>
        <Select placeholder="Select Id Card Type" options={this.idCard} onChange={this.changeType} disabled={typeBox} />

        {
          fileName
            ? (
              <span>
                <a href={previewUrl} download={fileName}>{fileName}</a>
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

        <div>
          {type} :
          <Input onChange={(e) => { this.props.handleIdSerialNo(e.currentTarget.value); }} />
          Please enter a number that identifies the ID card.
        </div>
      </>
    );
  }
}

export default UserPhotoIdCard;
