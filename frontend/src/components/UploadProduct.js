import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadProduct } from 'reducers/upload';

export const UploadProduct = () => {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.upload.image);
  const error = useSelector((state) => state.upload.productError);
  console.log(error);

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
    // clearForm();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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

        <button type="submit">Upload</button>
      </form>
      {error && <h1>{error}</h1>}
    </>
  );
};
