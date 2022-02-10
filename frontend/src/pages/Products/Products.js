import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { products } from '../reducers/products';
// import { cart } from '../../reducers/cart';
// import { user } from '../../reducers/user';
import styled from 'styled-components';
import { Label } from 'styledElements/Form';

import { showProduct } from '../../reducers/products';
// import styled from 'styled-components';
import {
  ProductCard,
  HeaderSection,
  BigSection,
} from '../../styledElements/Card';
import {
  H1,
  H2,
  H3,
  P,
  H4,
  H5,
  H6,
  ProductText,
} from '../../styledElements/Texts';
import { Button } from '../../styledElements/Buttons';
import { MiddleContainer } from '../../styledElements/Container';

import AddToCartButton from './AddToCartButton';

const Input = styled.input`
  border-radius: 20px;
  width: 20vw;
  padding: 0.4em;
  margin-top: 3em;
  text-align: center;
  font-family: var(--fontone);
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 5px;
  box-shadow: inset 1px 0px 10px 0.5px var(--black);
`;

const ProdImage = styled.img`
  max-width: 21rem;
  max-height: 37rem;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ProdTextBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--fontone);
  position: absolute;
  background-color: rgb(30, 30, 30, 0.5);
  padding: 1rem;
  box-shadow: -7px -9px 16px -6px rgb(30, 30, 30, 0.5),
    10px 7px 17px -6px rgb(30, 30, 30, 0.5);

  &:hover {
    background-color: rgb(30, 30, 30, 0.7);
  }

  
`;

const ProductImageCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin: 1rem;
  max-height: 37rem;
  width: 21rem;
  background-color: var(--saffron);
  box-shadow: -7px -9px 16px -6px #f7d7a8, 10px 7px 17px -6px grey;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
  &:hover ${ProdTextBox} {
    display: none;
  }
}
`;

const Products = () => {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.productList);
  const loading = useSelector((state) => state.ui.loading);
  const myCart = useSelector((state) => state.cart.cartList);
  const typeOfUser = useSelector((state) => state.user.accountType);
  // const accessToken = useSelector((state) => state.user.accessToken)

  useEffect(() => {
    dispatch(showProduct(searchValue, category));
  }, [dispatch, searchValue, category]);

  // const onAddToCart = (product) => {
  //   dispatch(cart.actions.setCart(product));
  // };

  const itemIsInCart = (item) => {
    return myCart.filter((prop) => prop._id === item._id).length > 0;
  };

  return (
    <MiddleContainer>
      <HeaderSection>
        <H2 paddingBottom="0.75em">Props collection</H2>
        <H5 paddingBottom="0.5em" color="black">
          Choose from our unique assortment of uploaded props from people all
          over Europe
        </H5>
        <P>
          Either use our search bar or fine tune your selection through the
          category buttons
        </P>
        <div>
          <form>
            <Input
              type="text"
              placeholder="Searchbar"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></Input>
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
          </form>
        </div>
      </HeaderSection>
      <MiddleContainer>
        {!loading ? (
          allProducts?.map((item) => (
            <ProductImageCard key={item._id}>
              <ProdImage src={item.image?.imageUrl} alt="website" />
              <ProdTextBox>
                <ProductText>
                  <H5>{item.name}</H5>
                </ProductText>
                <ProductText>
                  <H6>Category: {item.category}</H6>
                </ProductText>
              </ProdTextBox>

              <Button
                propWidth="90%"
                propBorder="none"
                onClick={() => navigate(`/products/${item._id}`)}
              >
                Prop details
              </Button>
              {itemIsInCart(item) ? (
                <P>Item in cart</P>
              ) : (
                <>
                  {typeOfUser === 'Business' && <AddToCartButton item={item} />}
                </>
              )}
            </ProductImageCard>
          ))
        ) : (
          <H5 color="black">Loading products</H5>
        )}
      </MiddleContainer>
      <BigSection>
        <P>Text holder for something like pagination</P>
      </BigSection>
    </MiddleContainer>
  );
};

export default Products;
