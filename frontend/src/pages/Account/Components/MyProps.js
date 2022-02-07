import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { H1 } from '../../../styledElements/Texts';
import { ProductCard } from 'styledElements/Card';
import { ProductText, H2 } from 'styledElements/Texts';
import { SmallButton } from 'styledElements/Buttons';
import { deleteAProduct } from 'reducers/user';

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
      {userHasProps ? (
        props.map((item) => (
          <ProductCard key={item._id}>
            <ProductText>
              <H2>{item.name}</H2>
            </ProductText>
            <img
              src={item.image?.imageUrl}
              className="product-image"
              alt="website"
            />
            <SmallButton onClick={() => handleDeleteProduct(item._id)}>
              Delete
            </SmallButton>
          </ProductCard>
        ))
      ) : (
        <H1>You haven't added any props yet</H1>
      )}
    </>
  );
};

export default MyProps;
