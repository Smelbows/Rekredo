import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { H1, H5, H6, H3, H4 } from '../../../styledElements/Texts';
import { AccountPageContainer, ProductCard } from 'styledElements/Card';
import { ProductText, H2 } from 'styledElements/Texts';
import { SmallButton } from 'styledElements/Buttons';
import { deleteAProduct } from 'reducers/user';
import styled from 'styled-components';

const MyUploads = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MyProps = () => {
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const props = useSelector((state) => state.user.personal.ownedProducts);
  console.log(props);
  const userHasProps = props.length > 0;

  const handleDeleteProduct = (id) => {
    dispatch(deleteAProduct(id));
  };

  return (
    <>
          <H4 backGroundColor="var(--wintergreen)">My props</H4>

    <AccountPageContainer>
      <MyUploads>
        {userHasProps ? (
          props.map((item) => (
            <ProductCard key={item._id}>
              <ProductText>
                <H5 color="black">{item.name}</H5>
              </ProductText>
              <img
                src={item.image?.imageUrl}
                className="product-image"
                alt="website"
              />
              <ProductText>
                <H6 color="black">Category: {item.category}</H6>
              </ProductText>

              <SmallButton onClick={() => handleDeleteProduct(item._id)}>
                Delete
              </SmallButton>
            </ProductCard>
          ))
        ) : (
          <H2 color="black">You haven't added any props yet</H2>
        )}
      </MyUploads>
    </AccountPageContainer>
    </>
  );
};

export default MyProps;
