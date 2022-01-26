import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BigSection } from 'styledElements/Card';
import { useSelector } from 'react-redux';

const PropDetails = () => {
  const products = useSelector((state) => state.products.productList);
  const { propid } = useParams();

  const prop = products.find((prop) => prop._id === propid);
  console.log(prop);

  return (
    <>
      <BigSection>
        <Link to="/products">Back to all props</Link>
        <p>{prop.name}</p>
        <img src={prop.image.imageUrl} alt={prop.name}></img>
      </BigSection>
      ;
    </>
  );
};

export default PropDetails;
