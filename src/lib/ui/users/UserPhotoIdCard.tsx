import React from 'react';
import {
  Button, Input, Select, Table, Modal, Image,
} from 'semantic-ui-react';
// import { Modal } from '@nuri/component';
import autobind from '~/lib/ui/module/autobindDecorator';
import UserApi from '~/lib/service/users/api/UserApi';

interface Props {
  handlePhotoIdCard:any
}

interface State {
  type:string;
  image:boolean;
  file: string,
  previewUrl: any,
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
      image: false,
      file: '',
      previewUrl: '',
    };
  }

  changeType = (e:any, data:any) => { /* 이런 파마미터 타입 지정 어떻게 아는지 */
    this.setState({
      type: data.value,
    });
  }

  closeModal = () => {
    this.setState({
      file: '',
      previewUrl: '',
    });
  }

  uploadIdCard = async () => {
    // await UserApi.uploadFile();
  }

  handleFileOnChange = (event:any) => {
    // console.log(event.target.files);
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        file,
        previewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  approveFile = async () => {
    const formData = new FormData();
    console.log(this.state.file);
    formData.append('id_file_path', this.state.file);
    console.log(formData);
    const returnData = await UserApi.uploadFile(formData);
  }

  render() {
    const {
      type, image, file, previewUrl,
    } = this.state;

    let profilePreview = null;
    if (previewUrl !== '') {
      profilePreview = <img className="profile_preview" src={previewUrl} alt="" style={{ width: '100%' }} />;
    }

    return (
      <>
        <Select placeholder="Select Id Card Type" options={this.idCard} onChange={this.changeType} />
        <Button content="Upload" onClick={this.uploadIdCard} />

        <Modal trigger={<Button>Show Modal</Button>} size="mini" onClose={this.closeModal}>
          <Modal.Header style={{ textAlign: 'center' }}>Upload</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {
                image
                  ? (
                    <div style={{ height: '150px' }}>
                      <Image wrapped size="medium" src="/img/logo.png" />
                    </div>
                  )
                  : ''
              }
              {
                profilePreview
              }
              <div style={{ textAlign: 'center', padding: '10px 5px 10px 5px' }}>
                {/*<div style={{ width: '50%', float: 'left' }}>*/}
                {/*  <span style={{ verticalAlign: '-webkit-baseline-middle' }}>*/}
                {/*    filename*/}
                {/*  </span>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <Button style={{ width: '45%' }}>Upload</Button>*/}
                {/*</div>*/}
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
          <Input onChange={(e) => { this.props.handlePhotoIdCard(e.currentTarget.value); }} />
          Please enter a number that identifies the ID card.
        </div>
      </>
    );
  }
}

export default UserPhotoIdCard;
