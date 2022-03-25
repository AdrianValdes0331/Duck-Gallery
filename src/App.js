import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ModalUpload from './comps/ModalUpload';

function App(){
  const[selectedImg, setSelectedImg] = useState(null);
  const[showUpload, upload] = useState(false);
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
    <div className="App">
        <Title />
        <UploadForm upload = {upload} />
        {showUpload && <ModalUpload upload = {upload} textArea = {textArea} setTextArea = {setTextArea} />}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
    </div>
  );
}

export default App;
