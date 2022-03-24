import React from 'react';
import { motion } from 'framer-motion';
import Description from './Description';
import { projectFirestore } from '../FireBase/config';

const Modal = ({ setSelectedImg, selectedImg }) => {
  document.body.style.overflow = "hidden";

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
      document.body.style.overflow = "visible";
    }
  }

  const exitModal = (e) => {
    setSelectedImg(null);
    document.body.style.overflow = "visible";
  }

  function deletePic(imageSelected){
    projectFirestore.collection('images').doc(selectedImg.id).delete().then(() => {
      setSelectedImg(null);
      document.body.style.overflow = "visible";
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div class="bckGround">
        <button type='button' class="close modalB" aria-label='Close' onClick={exitModal}>
          <span aria-hidden="true">&times;</span>
        </button>
        <button type='button' class="delete" aria-label='Delete' onClick={() => deletePic(selectedImg)} value="selectedImg">
          <span aria-hidden="true" class="fa fa-trash"></span>
        </button>
        <div class="row">
          <div class="col-5 description">
            <Description data={selectedImg.url}/>
          </div>
          <div class="col-6">
            <motion.img src={selectedImg.url} alt="enlarged pic" 
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Modal;