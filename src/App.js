import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ModalUpload from './comps/ModalUpload';
import { LoginButton } from './comps/Login';
import { LogoutButtom } from './comps/Logout';

function App(){
  const[selectedImg, setSelectedImg] = useState(null);
  const[showUpload, upload] = useState(false);
  const {isAuthenticated} = useAuth0();
  const[textArea, setTextArea] = useState(
    {
      value: '',
      rows: 5,
      minRows: 5,
      maxRows: 10,
    }
  );
  document.body.style.overflow = "visible";

  return(
    <>
    {isAuthenticated ? <>
    <div>
    <nav class="navbar">
    <h1><img src='../duck.svg' /><a href=''>Duck Gallery</a></h1>
    <form class="form-inline my-2 my-lg-0">
      <LogoutButtom />
    </form>
    </nav>  
    </div>
    <div className="App">
        <Title />
        <UploadForm upload = {upload} />
        {showUpload && <ModalUpload upload = {upload} textArea = {textArea} setTextArea = {setTextArea} />}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
    </div>
    <footer>
      <p>
        Using React, Bootstrap, FontAwesome, NodeJS and Firebase
      </p>
    </footer>
    </>
    :
    <div>
    <nav class="navbar"> 
    <h1><img src='../duck.svg' /><a href=''>Duck Gallery</a></h1> 
    <form class="form-inline my-2 my-lg-0">
    <LoginButton/>
    </form>
    </nav>  
    </div>
    }
    </>
  );
}

export default App;
