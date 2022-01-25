import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showProduct } from 'reducers/products';

import { Card, Section, ProductCard } from '../styledElements/Card';
import { H1, P } from '../styledElements/Texts';

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  return (
    <>
      <Section>
        <H1>Products</H1>
        {!loading
          ? allProducts?.map((item) => (
              <ProductCard key={item._id}>
                <P>{item.name}</P>
                <P>{item.description}</P>
                <P>{item.category}</P>
                <P>{item.tags}</P>
                <img src={item.image?.imageUrl} alt="website" />
              </ProductCard>
            ))
          : null}
      </Section>
    </>
  );
};

export default Products;
