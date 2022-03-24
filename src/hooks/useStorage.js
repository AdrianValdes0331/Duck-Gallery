//import { async } from '@firebase/util';
import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../FireBase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransfered / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=> {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            let askTitle = prompt("Add a Title to the image");
            const title = askTitle
            let askDescription = prompt("Add a description to the image");
            const description = askDescription;
            collectionRef.add({ url, createdAt, description, title })
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;