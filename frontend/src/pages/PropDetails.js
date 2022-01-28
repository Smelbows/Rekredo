import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BigSection, Main } from 'styledElements/Card';
import { useSelector } from 'react-redux';

const PropDetails = () => {
  const products = useSelector((state) => state.products.productList);
  //real value of the slug
  const { propid } = useParams();

  //match prop._id from db
  const prop = products.find((prop) => prop._id === propid);
  console.log(prop);

  return (
    <Main>
      <BigSection>
        <Link to="/products">Back to all props</Link>
        <p>{prop.name}</p>
        <img src={prop.image?.imageUrl} alt={prop.name}></img>
      </BigSection>
      ;
    </Main>
  );
};

export default PropDetails;
