import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

const UploadForm = ({upload}) => {

    return(
        <form>
            <label  class = "open" onClick={() => upload(true)}>
                <span>+</span>
            </label>
        </form>
    )
}

export default UploadForm;