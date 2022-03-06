import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { uploadImage } from 'reducers/upload';
import { FormBox, Form } from 'styledElements/Form';
import { Button } from 'styledElements/Buttons';

const Label = styled.label`
  padding: 10px;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Input = styled.input`
  align-items: center;
`;

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
        <Label>Prop Image</Label>
        <Input type="file" ref={fileInput} required />
        <Button color="black" type="submit">Upload Image</Button>
      </Form>
      {image && (
        <img
          src={image.imageUrl}
          className="upload-image"
          alt="your product"
        ></img>
      )}
    </FormBox>
  );
};
