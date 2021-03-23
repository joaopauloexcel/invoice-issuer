import React, { Component } from 'react';
import './Header.css';
import ImageLogo from "../../assets/logo.png"
import Arrow from "../../assets/arrow.svg";
import { ExpandLess, ExpandMore } from '@material-ui/icons';

class Header extends Component {
  constructor () {

    super();
    this.state = {
      "hideButton":false
    };

    this.setImage = this.setImage.bind(this);
  };

  componentWillMount () {

  }

  setImage () {
    localStorage.setItem('logo','')
  }

  render () {

    const {hideButton} = this.state;
    
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
        this.setState({"hideButton":!hideButton})
    };

    return (
      <div class="header-page">
          <div class="header-title">
            INVOICE
          </div>
          <div class="header-image">
            <div className={'header-image-container'}>
              
              <div>
                  <img id="company_logo" src={ImageLogo} />
              </div>

              <div>
                <label class="custom-file-upload">
                  {!hideButton && <ExpandMore 
                    style={{"fontSize":"22px", "cursor":"pointer"}}
                    onClick={() => this.setState({"hideButton":!hideButton})}
                  />}
                  {hideButton && <ExpandLess
                    style={{"fontSize":"22px", "cursor":"pointer"}}
                    onClick={() => this.setState({"hideButton":!hideButton})}
                  />}
                </label>
                {hideButton && <div className={'button-container-page'}>

                  <div>
                      <label for="imageFile" class="custom-file-upload">
                        <div className={"button-insert"}>Escolher Imagem</div>
                      </label>
                      <input 
                        style={{"display":"none"}}
                        type="file" 
                        id="imageFile" 
                        name='imageFile' 
                        onChange={imageUpload} />
                  </div>

                  <div>
                      <div className={"button-remove"} onClick={() => removeImage()}>Remover Imagem</div>
                  </div>

                </div>}
              </div>

            </div>
          </div>
        
      </div>

    );
  }
}

export default Header;
