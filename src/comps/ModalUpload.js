import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

const ModalUpload = ({upload, textArea, setTextArea}) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [preview, setPreview] = useState(null);
    const [submit, setSubmit] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        if(!file){
            setPreview(undefined);
            return
        }
        const objectUrl = URL.createObjectURL(file)
        setPreview(objectUrl)

        // libera memoria
        return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    const handleClick = (e) => {
      if (e.target.classList.contains('backdropU')) {
        upload(false);
        document.body.style.overflow = "visible";
      }
    }

    const exit = (e) => {
        upload(false);
        document.body.style.overflow = "visible";
    }

    const submitButton = (e) =>{
        setSubmit(true);
    }

    const changeHandler = (e) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = textArea;
        
        const previousRows = e.target.rows;
        e.target.rows = minRows; 
        
        const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);
    
        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }
        
        if (currentRows >= maxRows) {
            e.target.rows = maxRows;
            e.target.scrollTop = e.target.scrollHeight;
        }
    
        setTextArea({...textArea,
            value: e.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const fileSelect = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            console.log("se subio algo?")
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jp)');
        }
    }

    return(
        <motion.div className="backdropU" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div class="bckGroundU">
        <button type='button' class="close modalB" aria-label='Close' onClick={exit}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="row">
          <div class="col-5 description">
            <input type = "text" class="inputTitle" placeholder="Título" id="title" onChange={changeTitle}/>
            <textarea 
                rows={textArea.rows}
                value={textArea.value}
                placeholder={'Descripción'}
                className={'textarea'}
                onChange={changeHandler}
                id="description"/>
          </div>
          <div class="col-6">
            <label class="upload">
                <input type="file" onChange={fileSelect}/>
                <span aria-hidden="true" class="fa fa-upload"></span>
            </label>
            {file && <img src={preview}/>}
            <button type= "button" class = "submit" onClick={submitButton}>Submit</button>
            <div className="output">
                { error && <div className="error">{ error } </div> }    
                { file && <div>{ file.name }</div>}
                { submit && <ProgressBar file={file} setFile={setFile} title={title} description={textArea.value} 
                setSubmit={setSubmit} upload={upload} setTextArea={setTextArea}/> }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    )
}

export default ModalUpload;