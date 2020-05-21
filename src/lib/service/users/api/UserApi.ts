import axios from 'axios';

class UserApi {
  checkEmail = async () => {
    console.log('check email');
  }

  checkMeter = async () => {
    console.log('check meter');
  }

  uploadFile = async () => {
    console.log('upload file');
  }
}

export default new UserApi();
