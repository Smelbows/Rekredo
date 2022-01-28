import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage } from 'reducers/upload';
import { FormBox, Form } from 'styledElements/Form';
import { Button } from 'styledElements/Buttons';

export const UploadImage = () => {
  const dispatch = useDispatch();
  const fileInput = useRef('');

  const image = useSelector((state) => state.upload.image);
  const productSuccess = useSelector((state) => state.upload.productSuccess);

  const clearForm = () => {
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
    <FormBox>
      <Form onSubmit={handleFormSubmit}>
        <label>
          Prop Image
          <input type="file" ref={fileInput} required />
        </label>
        <Button type="submit">Upload Image</Button>
      </Form>
      {image && <img src={image.imageUrl} alt="your product"></img>}
    </FormBox>
  );
};
