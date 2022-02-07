import React from 'react';
import { useSelector } from 'react-redux';
import { H1 } from '../../../styledElements/Texts';
import { ProductCard } from 'styledElements/Card';
import { ProductText, H2 } from 'styledElements/Texts';
import { SmallButton } from 'styledElements/Buttons';

const MyProps = () => {
  const props = useSelector((state) => state.user.personal.ownedProducts);
  console.log(props)
  const userHasProps = props.length > 0;

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
            {/* <SmallButton onClick={() => navigate(`/products/${item._id}`)}>
              Prop details
            </SmallButton> */}
          </ProductCard>
        ))
      ) : (
        <H1>You haven't added any props yet</H1>
      )}
    </>
  );
};

export default MyProps;
