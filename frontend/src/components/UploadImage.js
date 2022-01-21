import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { uploadImage } from 'reducers/upload';

export const UploadImage = () => {
  const dispatch = useDispatch();
  const fileInput = useRef();

  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', fileInput.current.files[0]);
    formData.append('name', name);

    dispatch(uploadImage(formData));
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Prop Image
        <input type='file' ref={fileInput} />
      </label>

      <label>
        Prop name
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <button type='submit'>Upload</button>
    </form>
  );
};
