import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage } from 'reducers/upload';

export const UploadImage = () => {
  const dispatch = useDispatch();
  const fileInput = useRef('');

  const [name, setName] = useState('');

  const image = useSelector((state) => state.upload.image);
  const productSuccess = useSelector((state) => state.upload.productSuccess);

  const clearForm = () => {
    setName('');
    fileInput.current.value = '';
  };

  useEffect(() => {
    if (productSuccess) {
      clearForm();
    }
  }, [productSuccess]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', fileInput.current.files[0]);
    // formData.append('name', name);
    dispatch(uploadImage(formData));
    // clearForm();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Prop Image
          <input type="file" ref={fileInput} required />
        </label>
        <button type="submit">Upload</button>
      </form>
      {image && <img src={image.imageUrl} alt="your product"></img>}
    </>
  );
};
