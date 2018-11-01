import React, { Component } from 'react';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      formErrors: { name: '', lastname: '', email: '', password: '' },
      nameValid: false,
      lastnameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  render() {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint
        rem vel porro, molestias architecto eius. Cum non exercitationem quidem,
        possimus aliquid quis quos libero facere totam cumque, impedit amet.
      </div>
    );
  }
}

export default Contacts;
