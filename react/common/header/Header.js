import React, { Component } from 'react';
import './Header.css';
import ImageLogo from "../../assets/logo.png"

class Header extends Component {
  constructor () {

    super();
    this.state = {
      "img64":""
    };

    this.setImage = this.setImage.bind(this);
  };

  componentWillMount () {

  }

  setImage () {
    localStorage.setItem('logo','')
  }

  render () {

  const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }

    const imageUpload = (e) => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        document.getElementById('company_logo').setAttribute('src', base64);
        localStorage["fileBase64"] = base64;
        console.debug("file stored",base64);
      });
  };

  const removeImage = () => {
      var image = document.getElementById('company_logo');
      image.src = ""
      localStorage["fileBase64"] = '';
      console.debug("file stored",base64)
};


  const {img64} = this.state

    return (
      <div class="header-page">
        <div class="header-title">INVOICE</div>
        <div class="header-image">
          <img id="company_logo" src={ImageLogo} />
          <input 
            type="file" 
            id="imageFile" 
            name='imageFile' 
            onChange={imageUpload} />
            <button onClick={() => removeImage()}>Remove</button>
        </div>
      </div>

    );
  }
}

export default Header;
