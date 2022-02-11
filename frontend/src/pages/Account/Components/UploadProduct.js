import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uploadProduct } from 'reducers/upload';
import { PropButton, Button } from '../../../styledElements/Buttons';
import { FormBox, Form, StyledInput, Label } from 'styledElements/Form';

export const UploadProduct = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.upload.image);
  const productError = useSelector((state) => state.upload.imageError);
  const product = useSelector((state) => state.upload.product);
  const accessToken = useSelector((state) => state.user.accessToken);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  const clearForm = () => {
    setName('');
    setDescription('');
    setCategory('');
    setTags('');
  };

  //clearForm passed as prop to dispatch
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const allTags = tags?.split(',');
    dispatch(
      uploadProduct(
        name,
        description,
        category,
        allTags,
        image,
        clearForm,
        accessToken
      )
    );
    // if (image == null) {
    //   e.preventDefault();
    //   const allTags = tags?.split(',');
    //   dispatch(
    //     uploadProduct(name, description, category, allTags, image, clearForm)
    //   );
    //}
  };
  const navigate = useNavigate();
  return (
    <FormBox>
      <Form onSubmit={image !== null ? handleFormSubmit : null}>
        <Label>
          Prop name
          <StyledInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label>
          Prop description
          <StyledInput
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Label>

        <Label>
          Prop category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue="">Please select a category</option>
            <option value="Instrument">Instrument</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Art">Art</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            <option value="Electronics">Electronics</option>
            <option value="Environment">Environment</option>
          </select>
        </Label>
        <Label>
          Prop tags
          <StyledInput
            type="text"
            value={tags}
            placeholder="separate the tags with a comma"
            onChange={(e) => setTags(e.target.value)}
          />
        </Label>

        <Button disabled={!image} type="submit">
          Upload Product
        </Button>
      </Form>
      {productError && <h1>{productError}</h1>}
      {product && <p>Thank you, your product has been uploaded.</p>}
      {product && (
        <PropButton onClick={() => navigate('/products')}>
          Go to your account page
        </PropButton>
      )}
    </FormBox>
  );
};
