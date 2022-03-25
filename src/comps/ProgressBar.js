import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, title, description, setSubmit, upload, setTextArea}) => {
  setSubmit(false);
  upload(false);
  setTextArea({
      value: '',
      rows: 5,
      minRows: 5,
      maxRows: 10,
    })
  console.log(file);
  const { progress, url } = useStorage(file, description, title);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;