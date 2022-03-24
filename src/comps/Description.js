import React from 'react';
import useFirestore from '../hooks/useFirestore';

const Description = (data) => {
  const { docs } = useFirestore('images');

  return (
    <div>
      {docs && docs.map(doc => (
        Object.values(data).toString() === doc.url ? 
        <div key={doc.id}><h1>{doc.title}</h1><p>{doc.description}</p></div> :
        null
      ))}
    </div>
  )
}
/*
data == doc.url ? 
        <div><h1>{doc.title}</h1><p>{doc.description}</p></div> :
        null

Object.values(data).toString() === doc.url ? 
        console.log(Object.values(data).toString()) :
        null
*/
export default Description;