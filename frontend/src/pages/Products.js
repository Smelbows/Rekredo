import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showProduct } from 'reducers/products';

import { Card, Section } from '../components/Card';
import Nav from '../components/Nav';

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Section>
        <h1>Products</h1>
        {!loading
          ? allProducts?.map((item) => (
              <Card key={item._id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.tags}</p>
                <img src={item.image?.imageUrl} alt="website" />
              </Card>
            ))
          : null}
      </Section>
    </>
  );
};

export default Products;
