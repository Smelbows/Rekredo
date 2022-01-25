import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { showProduct } from 'reducers/products';
import styled from 'styled-components';
import { Section, ProductCard } from '../styledElements/Card';
import { H1, P } from '../styledElements/Texts';
import { SmallButton } from 'styledElements/Buttons';

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  border-radius: 3px;
  justify-content: space-evenly;
`;

const Products = () => {
  const navigate = useNavigate();
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
                <ProductText>
                  <P>{item.name}</P>
                  <P>{item.description}</P>
                  <P>{item.category}</P>
                  <P>{item.tags}</P>
                </ProductText>
                <img src={item.image?.imageUrl} alt="website" />
                <SmallButton onClick={() => navigate(`/products/${item._id}`)}>
                  Prop details
                </SmallButton>
              </ProductCard>
            ))
          : null}
      </Section>
    </>
  );
};

export default Products;
