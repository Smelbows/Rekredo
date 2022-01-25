import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { uploadProduct } from 'reducers/upload';
import { PropButton } from '../styledElements/Buttons';

export const UploadProduct = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.upload.image);
  const productError = useSelector((state) => state.upload.imageError);
  const product = useSelector((state) => state.upload.product);

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
      uploadProduct(name, description, category, allTags, image, clearForm)
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
    <>
      <form onSubmit={image !== null ? handleFormSubmit : null}>
        <label>
          Prop name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Prop description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
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
        </label>
        <label>
          Prop tags
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        <button disabled={!image} type="submit">
          Upload
        </button>
      </form>
      {productError && <h1>{productError}</h1>}
      {product && <p>Thank you, your product has been uploaded.</p>}
      {product && <PropButton onClick={() => navigate('/products')}>
        Go to your account page</PropButton>}
    </>
  );
};
